import { MediaKind } from '../schema/media.schema';

export class CreateMediaDto {
  readonly title: string;
  readonly description: string;
  readonly mediaLink: string;
  readonly mediaKind: MediaKind;
}
