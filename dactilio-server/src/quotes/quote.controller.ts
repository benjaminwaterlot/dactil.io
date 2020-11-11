import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuoteDto } from './dto/create-quote.dto';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get()
  get() {
    return this.quotesService.findAll();
  }

  @Post()
  create(@Body() quoteDto: QuoteDto) {
    return this.quotesService.create(quoteDto);
  }
}
