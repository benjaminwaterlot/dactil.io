import { HttpService, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { FetchProgrammingQuote } from './dto/fetch-programming-quote.dto';
import { Quote } from './quote.entity';

@Injectable()
export class QuotesService {
  constructor(
    @InjectRepository(Quote)
    private readonly quotesRepository: Repository<Quote>,
    private readonly httpService: HttpService,
  ) {}

  async init() {
    const { data: quotesFromApi } = await this.httpService
      .get<FetchProgrammingQuote[]>(
        'https://programming-quotes-api.herokuapp.com/quotes',
      )
      .toPromise();

    const refinedQuotes = quotesFromApi.map((quote) =>
      this.quotesRepository.create({ text: quote.en, author: quote.author }),
    );

    await this.quotesRepository.delete({});

    const entities = await this.quotesRepository.save(refinedQuotes);
    console.log(`${entities.length} entities saved`);

    return entities;
  }

  async create(quoteDto: CreateQuoteDto) {
    const quote = this.quotesRepository.create(quoteDto);
    return this.quotesRepository.save(quote);
  }

  findAll() {
    return this.quotesRepository.find();
  }
}
