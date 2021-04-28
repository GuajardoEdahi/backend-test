import { Document } from 'mongoose';
export declare type companyDocument = Company & Document;
export declare class Company {
    id: number;
    legal_name: string;
    short_name: string;
    account_name: string;
    logo: string;
    cover: string;
    created_at: string;
    updated_at: string;
}
export declare const CompanySchema: import("mongoose").Schema<Document<Company, {}>, import("mongoose").Model<any, any>, undefined>;
