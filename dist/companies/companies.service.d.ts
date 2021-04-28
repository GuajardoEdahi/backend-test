import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company, companyDocument } from 'src/schemas/company.schema';
import { Model } from 'mongoose';
export declare class CompaniesService {
    private companyModel;
    constructor(companyModel: Model<companyDocument>);
    create(createCompanyDto: CreateCompanyDto): Promise<Company>;
    findAll(): Promise<companyDocument[]>;
    findOne(short_name: string): import("mongoose").Query<companyDocument, companyDocument, {}>;
    update(short_name: string, updateCompanyDto: UpdateCompanyDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, companyDocument, {}>;
    remove(short_name: string): import("mongoose").Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, companyDocument, {}>;
}
