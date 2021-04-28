import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User,userDocument } from 'src/schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private userModel: Model<userDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return new this.userModel(createUserDto).save();
  }

  async findAll() {
    return this.userModel.find();
  }

  findOne(name:string) {

    return this.userModel.findOne({name});
  }

  update(name:string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({name}, {$set:{...updateUserDto}});
  }

  remove(name: string) {
    return this.userModel.deleteOne({name});
  }
}
