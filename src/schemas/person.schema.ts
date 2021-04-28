
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type personDocument = Person & Document;

@Schema()
export class Person {
  @Prop()
  id: number;
  
  @Prop()
  name: string;

  @Prop()
  first_name: string;

   @Prop()
   last_name: string;

   @Prop()
   company_id: string;

   @Prop()
   user_id: string;

   @Prop()
   confirmed_at: string;

   @Prop()
   created_at: string;

   @Prop()
   updated_at: string;



}

export const PersonSchema = SchemaFactory.createForClass(Person);