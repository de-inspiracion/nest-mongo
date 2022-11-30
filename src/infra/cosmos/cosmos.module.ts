import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigCosmos } from './config';
import { CosmosService } from './cosmos.service';
import { Person, PersonSchema } from './schemas/person.schema';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: ConfigCosmos,
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: Person.name, schema: PersonSchema }]),
  ],
  providers: [
    CosmosService,
    { provide: 'storeCosmos', useClass: CosmosService },
    ConfigCosmos,
    ConfigService,
  ],
  exports: [
    MongooseModule,
    { provide: 'storeCosmos', useClass: CosmosService },
  ],
})
export class CosmosModule {}
