import { IsNotEmpty } from 'class-validator';

export class CreateQuoteDto {
  @IsNotEmpty()
  text: string;

  @IsNotEmpty()
  author: string;
}
