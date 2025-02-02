import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CoachUncheckedUpdateOneWithoutUserInput } from '../coach/coach-unchecked-update-one-without-user.input';
import { NotificationsUncheckedUpdateManyWithoutUserInput } from '../notifications/notifications-unchecked-update-many-without-user.input';

@InputType()
export class UserUncheckedUpdateWithoutClientInput {

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

    @Field(() => CoachUncheckedUpdateOneWithoutUserInput, {nullable:true})
    coach?: CoachUncheckedUpdateOneWithoutUserInput;

    @Field(() => NotificationsUncheckedUpdateManyWithoutUserInput, {nullable:true})
    Notifications?: NotificationsUncheckedUpdateManyWithoutUserInput;
}
