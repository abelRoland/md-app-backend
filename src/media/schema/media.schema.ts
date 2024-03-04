import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export enum MediaKind {
  LINK = 'link',
  VIDEO = 'video',
}

@Schema({
  timestamps: true,
})
export class Media {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  mediaLink: string;

  @Prop()
  mediaKind: MediaKind;
}

export const MediaSchema = SchemaFactory.createForClass(Media);
