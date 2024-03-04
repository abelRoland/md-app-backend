import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { MediaService } from './media.service';
import { Media } from './schema/media.schema';
import { GetMediaFilterDto } from './dto/get-media-filter.dto';
import { CreateMediaDto } from './dto/create-media.dto';

@Controller('medias')
export class MediaController {
  constructor(private mediaService: MediaService) {}
  @Post()
  async createMedia(
    @Body()
    media: CreateMediaDto,
  ): Promise<Media> {
    return this.mediaService.create(media);
  }
  @Get()
  async getAllMedias(@Query() filterDto: GetMediaFilterDto): Promise<Media[]> {
    return this.mediaService.findAllMedias(filterDto);
  }

  @Get(':id')
  async getMedia(
    @Param('id')
    id: string,
  ): Promise<Media> {
    return this.mediaService.findById(id);
  }
}
