import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companiesService.create(createCompanyDto);
  }

  @Get()
  findAll() {
    return this.companiesService.findAll();
  }

  @Get(':short_name')
  findOne(@Param('short_name') name: string) {
    return this.companiesService.findOne(name);
  }

  @Patch(':short_name')
  update(@Param('short_name') short_name: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companiesService.update(short_name, updateCompanyDto);
  }

  @Delete(':short_name')
  remove(@Param('short_name') short_name: string) {
    return this.companiesService.remove(short_name);
  }
}
