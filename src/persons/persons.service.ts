import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Person,personDocument } from 'src/schemas/person.schema';
import { Model } from 'mongoose';

@Injectable()
export class PersonsService {

  constructor(@InjectModel(Person.name) private personModel: Model<personDocument>) {}

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    return new this.personModel(createPersonDto).save();
  }

  async findAll() {
    return this.personModel.find();
  }

  findOne(name:string) {

    return this.personModel.findOne({name});
  }

  update(name:string, updatePersonDto: UpdatePersonDto) {
    return this.personModel.updateOne({name}, {$set:{...updatePersonDto}});
  }

  remove(name: string) {
    return this.personModel.deleteOne({name});
  }

}