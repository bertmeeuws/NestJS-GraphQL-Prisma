import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ClientUncheckedUpdateOneWithoutUserInput } from '../client/client-unchecked-update-one-without-user.input';
import { CoachUncheckedUpdateOneWithoutUserInput } from '../coach/coach-unchecked-update-one-without-user.input';

@InputType()
export class UserUncheckedUpdateWithoutNotificationsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    profile_image?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ClientUncheckedUpdateOneWithoutUserInput, {nullable:true})
    client?: ClientUncheckedUpdateOneWithoutUserInput;

    @Field(() => CoachUncheckedUpdateOneWithoutUserInput, {nullable:true})
    coach?: CoachUncheckedUpdateOneWithoutUserInput;
}
