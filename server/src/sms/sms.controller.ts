import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { SmsService } from './sms.service';

@Controller('sms')
export class SmsController {
  constructor(private readonly smsService: SmsService) { }

  @Post('send')
  async sendSms(
    @Body() body: { to: string; code: number },
  ): Promise<any> {
    const { to, code } = body;

    try {
      const result = await this.smsService.sendSms(to, code);
      return {
        success: true,
        message: 'SMS yuborildi',
        data: result,
      };
    } catch (error) {
      throw new HttpException(
        'SMS yuborilmadi: ' + error.code,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
