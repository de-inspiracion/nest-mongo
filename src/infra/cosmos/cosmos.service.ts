import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Person, PersonDocument } from './schemas/person.schema';
import { StoreServiceI } from 'src/domain/storage.service.interface';

@Injectable()
export class CosmosService implements StoreServiceI {
  constructor(
    @InjectModel(Person.name) private personModel: Model<PersonDocument>,
  ) {}
  getById: () => '';
  update: (data: any, id: any) => '';

  async save(createCatDto: any): Promise<Person> {
    console.log(createCatDto);
    const createdCat = new this.personModel(createCatDto);
    return createdCat.save();
  }

  async getAll(): Promise<Person[]> {
    return this.personModel.find().exec();
  }
}
