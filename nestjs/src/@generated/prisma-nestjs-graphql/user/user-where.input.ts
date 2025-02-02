import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ClientRelationFilter } from '../client/client-relation-filter.input';
import { CoachRelationFilter } from '../coach/coach-relation-filter.input';
import { NotificationsListRelationFilter } from '../notifications/notifications-list-relation-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    role?: StringFilter;

    @Field(() => ClientRelationFilter, {nullable:true})
    client?: ClientRelationFilter;

    @Field(() => CoachRelationFilter, {nullable:true})
    coach?: CoachRelationFilter;

    @Field(() => NotificationsListRelationFilter, {nullable:true})
    Notifications?: NotificationsListRelationFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profile_image?: StringNullableFilter;
}
