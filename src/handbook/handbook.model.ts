import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HandbookDocument = Handbook & Document;

@ObjectType()
@Schema()
export class Handbook {
    @Field()
    title: String;

    @Field()
    author: String;

    @Field()
    body: String;
}

export const HandbookSchema = SchemaFactory.createForClass(Handbook);