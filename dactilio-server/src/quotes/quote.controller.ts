import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get()
  get() {
    return this.quotesService.findAll();
  }

  @Post('init')
  init() {
    return this.quotesService.init();
  }

  @Post()
  create(@Body() quoteDto: CreateQuoteDto) {
    return this.quotesService.create(quoteDto);
  }
}
