import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SmsModule } from '../sms/sms.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [SmsModule, PrismaModule, JwtModule.register({
    secret: process.env.JWT_SECRET || 'qoooooottttttyuhUYGUGGjhgUJGUYguyGUYGuyGUYGYJGjgjhgzgjGHJghJGJHGHNGNBJLHGjGJHGJHGJHGHJjhgjhgjggUYGuyGUygUYgOjggUYy',
    signOptions: { expiresIn: '7d' },
  }),],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [SmsModule, AuthService],
})
export class AuthModule { }
