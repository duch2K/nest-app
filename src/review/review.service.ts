import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { HydratedDocument, Model } from 'mongoose';
import { ReviewDocument, ReviewModel } from './review.model';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(ReviewModel.name) private reviewModel: Model<ReviewDocument>,
  ) {}

  async create(dto: CreateReviewDto): Promise<HydratedDocument<ReviewModel>> {
    return await this.reviewModel.create(dto);
  }

  async findByProductId(
    productId: string,
  ): Promise<HydratedDocument<ReviewModel>[]> {
    return await this.reviewModel.find({ productId: productId }).exec();
  }

  async delete(id: string): Promise<HydratedDocument<ReviewModel> | null> {
    return await this.reviewModel.findByIdAndDelete(id).exec();
  }

  async deleteByProductId(productId: string) {
    return await this.reviewModel.deleteMany({ productId: productId }).exec();
  }
}
