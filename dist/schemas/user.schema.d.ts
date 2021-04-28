import { Document } from 'mongoose';
export declare type userDocument = User & Document;
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    system_status_id: number;
    confirmation_code: string;
    confirmed_at: string;
    accepted_conditions_at: string;
    created_at: string;
    updated_at: string;
    registration_method: string;
    token: string;
    recovery_password_code: string;
}
export declare const UserSchema: import("mongoose").Schema<Document<User, {}>, import("mongoose").Model<any, any>, undefined>;
