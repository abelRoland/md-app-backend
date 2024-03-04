import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Media } from './schema/media.schema';
import mongoose from 'mongoose';
import { GetMediaFilterDto } from './dto/get-media-filter.dto';

@Injectable()
export class MediaService {
  constructor(
    @InjectModel(Media.name)
    private mediaModel: mongoose.Model<Media>,
  ) {}

  async findAllMedias(filterDto: GetMediaFilterDto): Promise<Media[]> {
    const medias = await this.mediaModel.find(filterDto);
    return medias;
  }

  async create(media: Media): Promise<Media> {
    const res = await this.mediaModel.create(media);
    return res;
  }

  async findById(id: string): Promise<Media> {
    const media = await this.mediaModel.findById(id);
    if (!media) {
      throw new NotFoundException("Media doesn't exist.");
    }
    return media;
  }
}
