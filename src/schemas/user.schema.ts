
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type userDocument = User & Document;

@Schema()
export class User {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  email: string;

//   @Prop()
//   id: number;


   @Prop()
  password: string;

   @Prop()
   system_status_id: number;

   @Prop()
   confirmation_code: string;

   @Prop()
   confirmed_at: string;

   @Prop()
   accepted_conditions_at: string;

   @Prop()
   created_at: string;

   @Prop()
   updated_at: string;

   @Prop()
   registration_method: string;

   @Prop()
   token: string;

   @Prop()
   recovery_password_code: string;


}

export const UserSchema = SchemaFactory.createForClass(User);