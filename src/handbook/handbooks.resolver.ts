// books.resolver.ts
import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { Handbook } from './handbook.model';
import { HandbookService } from './handbooks.service';
import { HandbookInput } from './handbook.input';

@Resolver(() => Handbook)
export class HandbookResolver {
    constructor(private readonly handbookService: HandbookService) { }

    @Query(() => [Handbook])
    async handbooks(): Promise<Handbook[]> {
        return this.handbookService.findAll();
    }

    @Query(() => Handbook)
    async handbook(@Args('id', { type: () => ID }) id: String): Promise<Handbook> {
        const jeje = await this.handbookService.findOne(id)
        console.log(jeje)
        return jeje;
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