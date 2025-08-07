import { IsString } from 'class-validator';

export class VerifyDto {
  @IsString()
  phone: string;

  @IsString()
  code: string;
}
