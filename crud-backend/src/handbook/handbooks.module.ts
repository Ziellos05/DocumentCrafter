import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { HandbookService } from './handbooks.service';
import { HandbookResolver } from './handbooks.resolver';
import { Handbook, HandbookSchema } from './handbook.model';

@Module({
    providers: [
        HandbookService,
        HandbookResolver,
    ],
    imports: [MongooseModule.forFeature([
        {
            name: Handbook.name,
            schema: HandbookSchema,
        },
    ]),
  ],
})

export class HandbooksModule {}