import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { StorageApp } from './application/storage';
import { CosmosModule } from './infra/cosmos/cosmos.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './configuration/config';
@Module({
  imports: [
    CosmosModule,
    ConfigModule.forRoot({
      load: [config],
    }),
  ],
  controllers: [AppController],
  providers: [AppService, StorageApp, ConfigService],
})
export class AppModule {}
