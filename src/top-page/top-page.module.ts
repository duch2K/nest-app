import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TopPageController } from './top-page.controller';
import { TopPageModel, TopPageSchema } from './top-page.model';

@Module({
  controllers: [TopPageController],
  imports: [
    MongooseModule.forFeature([
      { name: TopPageModel.name, schema: TopPageSchema, collection: 'TopPage' },
    ]),
  ],
})
export class TopPageModule {}
