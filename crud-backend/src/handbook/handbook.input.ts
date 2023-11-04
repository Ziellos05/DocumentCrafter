// book.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class HandbookInput {
    @Field()
    title: String;

    @Field()
    author: String;

    @Field()
    body: String

    @Field()
    date: String
    
    @Field()
    _id: String
}