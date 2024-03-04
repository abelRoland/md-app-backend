import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  NON_BINARY = 'non-binary',
  NOT_DECLARED = 'not-declared',
}

@Schema({
  timestamps: true,
})
export class User {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop()
  gender: Gender;

  @Prop({ required: true, unique: true })
  email: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
