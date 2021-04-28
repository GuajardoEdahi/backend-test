import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, userDocument } from 'src/schemas/user.schema';
import { Model } from 'mongoose';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<userDocument>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<userDocument[]>;
    findOne(name: string): import("mongoose").Query<userDocument, userDocument, {}>;
    update(name: string, updateUserDto: UpdateUserDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, userDocument, {}>;
    remove(name: string): import("mongoose").Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, userDocument, {}>;
}
