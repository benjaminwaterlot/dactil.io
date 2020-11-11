import { Repository } from 'typeorm';
import { QuoteDto } from './dto/create-quote.dto';
import { Quote } from './quote.entity';
export declare class QuotesService {
    private readonly quotesRepository;
    constructor(quotesRepository: Repository<Quote>);
    create(quoteDto: QuoteDto): Promise<Quote>;
    findAll(): Promise<Quote[]>;
}
