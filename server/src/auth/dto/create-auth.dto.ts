import {
  IsNotEmpty,
  IsString,
  Matches,
  Length,
  IsOptional,
} from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 30, { message: 'Ism 2 dan 30 tagacha harf bo‘lishi kerak' })
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(2, 30, { message: 'Familiya 2 dan 30 tagacha harf bo‘lishi kerak' })
  surname: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  @IsString()
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/,
    {
      message:
        'Parol kamida 8 ta belgi, 1 ta katta harf, 1 ta kichik harf, 1 ta raqam va 1 ta maxsus belgi bo‘lishi kerak',
    },
  )
  password: string;

  @IsOptional()
  @IsString()
  referalLink?: string;
}
