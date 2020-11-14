import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { QuotesModule } from './quotes/quote.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './src/dev.db',
      synchronize: true,
      autoLoadEntities: true,
    }),
    QuotesModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
