// sms/sms.service.ts
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SmsService {
  constructor(private readonly httpService: HttpService) { }

  async sendSms(to: string,code:number): Promise<any> {
    const gatewayUrl = 'http://192.168.213.187:8082';
    const token = '8539a6cc-d67c-4498-877d-65f11afaf4c7';

    const message =
      `Assalomu alaykum!\n` +
      `Tasdiqlash kodingiz: ${code}\n` +
      `Kodni quyidagi havola orqali tasdiqlang:\n` +
      `https://wayprint.uz/verify?code=${code}`;

    const body = {
      to,
      message,
    };

    const headers = {
      Authorization: token,
      'Content-Type': 'application/json',
    };

    try {
      console.log('📤 SMS yuborilmoqda:');
      console.log('➡️ Telefon:', to);
      console.log('✉️ Xabar:', message);

      const res = await firstValueFrom(
        this.httpService.post(gatewayUrl, body, { headers }),
      );

      console.log('✅ SMS yuborildi, javob:', res.data);
      return res.data;
    } catch (error) {
      console.error('❌ SMS yuborishda xatolik:', error.message);
      throw error;
    }
  }

}
