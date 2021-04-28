/// <reference types="mongoose" />
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("../schemas/user.schema").User>;
    findAll(): Promise<import("../schemas/user.schema").userDocument[]>;
    findOne(name: string): import("mongoose").Query<import("../schemas/user.schema").userDocument, import("../schemas/user.schema").userDocument, {}>;
    update(name: string, updateUserDto: UpdateUserDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("../schemas/user.schema").userDocument, {}>;
    remove(name: string): import("mongoose").Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, import("../schemas/user.schema").userDocument, {}>;
}
