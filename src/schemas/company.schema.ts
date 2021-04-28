
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type companyDocument = Company & Document;

@Schema()
export class Company {
  @Prop()
  id: number;

  @Prop()
  legal_name: string;

  @Prop()
  short_name: string;

   @Prop()
   account_name: string;

   @Prop()
   logo: string;

   @Prop()
   cover: string;

   @Prop()
   created_at: string;

   @Prop()
   updated_at: string;


}

export const CompanySchema = SchemaFactory.createForClass(Company);