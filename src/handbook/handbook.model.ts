import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HandbookDocument = Handbook & Document;

@ObjectType()
@Schema()
export class Handbook {

    @Prop()
    @Field()
    title: String;

    @Prop()
    @Field()
    author: String;

    @Prop()
    @Field()
    body: String;

    @Prop()
    @Field()
    date: String;

    @Prop()
    @Field()
    _id: String;
}

export const HandbookSchema = SchemaFactory.createForClass(Handbook);