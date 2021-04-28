import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person, personDocument } from 'src/schemas/person.schema';
import { Model } from 'mongoose';
export declare class PersonsService {
    private personModel;
    constructor(personModel: Model<personDocument>);
    create(createPersonDto: CreatePersonDto): Promise<Person>;
    findAll(): Promise<personDocument[]>;
    findOne(name: string): import("mongoose").Query<personDocument, personDocument, {}>;
    update(name: string, updatePersonDto: UpdatePersonDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, personDocument, {}>;
    remove(name: string): import("mongoose").Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, personDocument, {}>;
}
