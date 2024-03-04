import { Gender } from '../schema/user.schema';

export class UserDto {
  readonly name: string;
  readonly age: number;
  readonly gender: Gender;
  readonly email: string;
}
