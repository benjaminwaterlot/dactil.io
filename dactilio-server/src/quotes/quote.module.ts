import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuotesController } from './quote.controller';
import { Quote } from './quote.entity';
import { QuotesService } from './quotes.service';

@Module({
  controllers: [QuotesController],
  imports: [TypeOrmModule.forFeature([Quote]), HttpModule],
  providers: [QuotesService],
})
export class QuotesModule {}
