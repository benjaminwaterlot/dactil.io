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
  ) {
    this.init();
  }

  async init() {
    console.log('>>> INIT');
    console.log(await this.quotesRepository.find());

    const newz = Array(5)
      .fill(null)
      .map(() => this.quotesRepository.create({ text: 'loremx' }));

    console.log('🌈 : QuotesService -> init -> newz', newz);
    await this.quotesRepository.save(newz);

    console.log(await this.quotesRepository.find());
  }

  async create(quoteDto: QuoteDto) {
    const quote = this.quotesRepository.create(quoteDto);
    return this.quotesRepository.save(quote);
  }

  findAll() {
    return this.quotesRepository.find();
  }
}
