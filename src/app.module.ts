import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonsModule } from './persons/persons.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://localhost/nest'), PersonsModule, CompaniesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
