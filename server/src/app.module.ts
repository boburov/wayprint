import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SmsModule } from './sms/sms.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthModule, SmsModule, PrismaModule,],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule { }
