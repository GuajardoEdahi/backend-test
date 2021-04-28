"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const person_schema_1 = require("../schemas/person.schema");
const mongoose_2 = require("mongoose");
let PersonsService = class PersonsService {
    constructor(personModel) {
        this.personModel = personModel;
    }
    async create(createPersonDto) {
        return new this.personModel(createPersonDto).save();
    }
    async findAll() {
        return this.personModel.find();
    }
    findOne(name) {
        return this.personModel.findOne({ name });
    }
    update(name, updatePersonDto) {
        return this.personModel.updateOne({ name }, { $set: Object.assign({}, updatePersonDto) });
    }
    remove(name) {
        return this.personModel.deleteOne({ name });
    }
};
PersonsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(person_schema_1.Person.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PersonsService);
exports.PersonsService = PersonsService;
//# sourceMappingURL=persons.service.js.map