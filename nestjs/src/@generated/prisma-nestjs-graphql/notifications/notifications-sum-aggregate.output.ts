import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NotificationsSumAggregate {

    @Field(() => Int, {nullable:true})
    userId?: number;
}
