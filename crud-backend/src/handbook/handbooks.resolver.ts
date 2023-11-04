// books.resolver.ts
import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Handbook } from './handbook.model';
import { HandbookService } from './handbooks.service';
import { HandbookInput } from './handbook.input';
import { generatePDF } from './util/pdfMaker';
import { uploadPdf } from './util/pdfUploader';

@Resolver(() => Handbook)
export class HandbookResolver {
    constructor(private readonly handbookService: HandbookService) { }

    @Query(() => String)
    async pdf(@Args('id', { type: () => ID }) id: string): Promise<string> {
        const data = await this.handbookService.findOne(id);
        const pdf = await generatePDF(data);
        return uploadPdf(pdf, id);
    }

    @Query(() => [Handbook])
    async handbooks(): Promise<Handbook[]> {
        return this.handbookService.findAll();
    }

    @Query(() => Handbook)
    async handbook(@Args('id', { type: () => ID }) id: String): Promise<Handbook> {
        return this.handbookService.findOne(id);
    }

    @Mutation(() => Handbook)
    async createBook(@Args('input') input: HandbookInput): Promise<Handbook> {
        return this.handbookService.create(input);
    }

    @Mutation(() => Handbook)
    async updateBook(
        @Args('id', { type: () => ID }) id: String,
        @Args('input') input: HandbookInput,
    ): Promise<Handbook> {
        return this.handbookService.update(id, input);
    }

    @Mutation(() => Handbook)
    async deleteBook(@Args('id', { type: () => ID }) id: String): Promise<Handbook> {
        return this.handbookService.delete(id);
    }
}