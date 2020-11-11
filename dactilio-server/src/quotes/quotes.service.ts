import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuoteDto } from './dto/create-quote.dto';
import { Quote } from './quote.entity';

@Injectable()
export class QuotesService {
  constructor(
    @InjectRepository(Quote)
    private readonly quotesRepository: Repository<Quote>,
  ) {}

  async create(quoteDto: QuoteDto) {
    const quote = this.quotesRepository.create(quoteDto);
    return this.quotesRepository.save(quote);
  }

  findAll() {
    return this.quotesRepository.find();
  }
}
