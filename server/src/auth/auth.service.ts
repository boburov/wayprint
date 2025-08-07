import { BadRequestException, HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { generateCode } from 'src/functions/main';
import * as bycrypt from "bcrypt"
import { SmsService } from 'src/sms/sms.service';
import { VerifyDto } from './dto/verify.dto';
import { LoginDto } from './dto/login.fto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(private prisma: PrismaService, private readonly smsService: SmsService, private jwtService: JwtService) { }

  // all users
  async all_user() {
    return this.prisma.user.findMany({})
  }

  // register section
  async register(dto: CreateAuthDto) {
    const { name, surname, phone, password, referalLink } = dto;

    const existingUser = await this.prisma.user.findFirst({ where: { phone } });
    if (existingUser) throw new HttpException("Bu telefon ro'yxatdan o'tgan", 409);

    const generated_code = generateCode();
    const hash = await bycrypt.hash(password, 10);

    let referredById: string | null = null;

    if (referalLink) {
      const refUser = await this.prisma.user.findFirst({ where: { referalLink: referalLink } });
      if (refUser) referredById = refUser.id;
    }

    await this.smsService.sendSms(phone, generated_code);

    const newUser = await this.prisma.user.create({
      data: {
        name,
        surname,
        phone,
        password: hash,
        isVerifyed: false,
        role: "USER",
        referredById,
        code: generated_code,
        referalLink: `ref-${generateCode()}`
      }
    });

    return { message: "User ro'yxatdan o'tdi", newUser };
  }

  // verify number
  async verifyCode(dto: VerifyDto) {
    const { phone, code } = dto;

    const user = await this.prisma.user.findFirst({
      where: { phone },
    });

    if (!user) {
      throw new HttpException("Bunday foydalanuvchi topilmadi", 404);
    }

    if (user.isVerifyed) {
      return { message: "Foydalanuvchi allaqachon tasdiqlangan" };
    }

    const numericCode = parseInt(code, 10);
    if (user.code !== numericCode) {
      throw new BadRequestException('Kod noto‘g‘ri');
    }

    await this.prisma.user.update({
      where: { id: user.id },
      data: {
        isVerifyed: true,
      }
    });

    const payload = { sub: user.id, phone: user.phone, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  // login section
  async login(dto: LoginDto) {
    try {
      const { phone, password } = dto

      const user = await this.prisma.user.findFirst({ where: { phone } })

      if (!phone) throw new HttpException("bu raqam bilan ro'yxatdan o'tilmagan", 404)

      const payload = { sub: user?.id, phone: user?.phone, role: user?.role };
      
      return {
        access_token: this.jwtService.sign(payload),
      };

    } catch (error) {
      console.log(error);
    }
  }

}
