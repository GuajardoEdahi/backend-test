import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Company,companyDocument } from 'src/schemas/company.schema';
import { Model } from 'mongoose';

@Injectable()
export class CompaniesService {

  constructor(@InjectModel(Company.name) private companyModel: Model<companyDocument>) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    return new this.companyModel(createCompanyDto).save();
  }

  async findAll() {
    return this.companyModel.find();
  }

  findOne(short_name:string) {

    return this.companyModel.findOne({short_name});
  }

  update(short_name:string, updateCompanyDto: UpdateCompanyDto) {
    return this.companyModel.updateOne({short_name}, {$set:{...updateCompanyDto}});
  }

  remove(short_name: string) {
    return this.companyModel.deleteOne({short_name});
  }

}