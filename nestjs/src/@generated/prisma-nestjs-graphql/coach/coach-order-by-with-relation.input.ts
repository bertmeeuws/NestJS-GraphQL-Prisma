import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { ClientOrderByRelationAggregateInput } from '../client/client-order-by-relation-aggregate.input';
import { InviteOrderByRelationAggregateInput } from '../invite/invite-order-by-relation-aggregate.input';
import { DietplanOrderByRelationAggregateInput } from '../dietplan/dietplan-order-by-relation-aggregate.input';
import { WorkoutOrderByRelationAggregateInput } from '../workout/workout-order-by-relation-aggregate.input';

@InputType()
export class CoachOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    surname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => ClientOrderByRelationAggregateInput, {nullable:true})
    clients?: ClientOrderByRelationAggregateInput;

    @Field(() => InviteOrderByRelationAggregateInput, {nullable:true})
    Invite?: InviteOrderByRelationAggregateInput;

    @Field(() => DietplanOrderByRelationAggregateInput, {nullable:true})
    Dietplan?: DietplanOrderByRelationAggregateInput;

    @Field(() => WorkoutOrderByRelationAggregateInput, {nullable:true})
    Workout?: WorkoutOrderByRelationAggregateInput;
}
