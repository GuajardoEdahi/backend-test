/// <reference types="mongoose" />
import { PersonsService } from './persons.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
export declare class PersonsController {
    private readonly personsService;
    constructor(personsService: PersonsService);
    create(createUserDto: CreatePersonDto): Promise<import("../schemas/person.schema").Person>;
    findAll(): Promise<import("../schemas/person.schema").personDocument[]>;
    findOne(name: string): import("mongoose").Query<import("../schemas/person.schema").personDocument, import("../schemas/person.schema").personDocument, {}>;
    update(name: string, updateUserDto: UpdatePersonDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("../schemas/person.schema").personDocument, {}>;
    remove(name: string): import("mongoose").Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, import("../schemas/person.schema").personDocument, {}>;
}
