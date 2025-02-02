import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ClientCreateManyUserInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  surname!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => Date, { nullable: true })
  dob?: Date | string;

  @Field(() => String, { nullable: true })
  phone?: string;

  @Field(() => String, { nullable: true })
  address?: string;

  @Field(() => Int, { nullable: true })
  number?: number;

  @Field(() => Int, { nullable: true })
  postal?: number;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => Int, { nullable: true })
  coachId?: number;
}
