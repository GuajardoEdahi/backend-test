/// <reference types="mongoose" />
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompaniesController {
    private readonly companiesService;
    constructor(companiesService: CompaniesService);
    create(createCompanyDto: CreateCompanyDto): Promise<import("../schemas/company.schema").Company>;
    findAll(): Promise<import("../schemas/company.schema").companyDocument[]>;
    findOne(name: string): import("mongoose").Query<import("../schemas/company.schema").companyDocument, import("../schemas/company.schema").companyDocument, {}>;
    update(short_name: string, updateCompanyDto: UpdateCompanyDto): import("mongoose").Query<import("mongoose").UpdateWriteOpResult, import("../schemas/company.schema").companyDocument, {}>;
    remove(short_name: string): import("mongoose").Query<{
        ok?: number;
        n?: number;
    } & {
        deletedCount?: number;
    }, import("../schemas/company.schema").companyDocument, {}>;
}
