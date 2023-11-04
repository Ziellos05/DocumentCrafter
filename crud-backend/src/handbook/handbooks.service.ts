// books.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Handbook, HandbookDocument } from './handbook.model';

@Injectable()
export class HandbookService {
    constructor(@InjectModel(Handbook.name) private handbookModel: Model<HandbookDocument>) { }

    async findAll(): Promise<Handbook[]> {
        return this.handbookModel.find().exec();
    }

    async findOne(id: String): Promise<Handbook> {
        const aja = await this.handbookModel.findById(id)
        return this.handbookModel.findById(id).exec();
    }

    async create(book: Handbook): Promise<Handbook> {
        const newBook = new this.handbookModel(book);
        return newBook.save();
    }

    async update(id: String, book: Handbook): Promise<Handbook> {
        return this.handbookModel.findByIdAndUpdate(id, book, { new: true }).exec();
    }

    async delete(id: String): Promise<Handbook> {
        return this.handbookModel.findByIdAndDelete(id).exec();
    }
}