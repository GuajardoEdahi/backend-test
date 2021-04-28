import { Document } from 'mongoose';
export declare type personDocument = Person & Document;
export declare class Person {
    name: string;
    first_name: string;
    last_name: string;
    company_id: string;
    user_id: string;
    confirmed_at: string;
    created_at: string;
    updated_at: string;
}
export declare const PersonSchema: import("mongoose").Schema<Document<Person, {}>, import("mongoose").Model<any, any>, undefined>;
