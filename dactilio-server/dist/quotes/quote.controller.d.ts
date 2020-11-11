import { QuoteDto } from './dto/create-quote.dto';
import { QuotesService } from './quotes.service';
export declare class QuotesController {
    private readonly quotesService;
    constructor(quotesService: QuotesService);
    get(): Promise<import("./quote.entity").Quote[]>;
    create(quoteDto: QuoteDto): Promise<import("./quote.entity").Quote>;
}
