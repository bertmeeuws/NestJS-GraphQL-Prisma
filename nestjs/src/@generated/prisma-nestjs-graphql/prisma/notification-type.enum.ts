import { registerEnumType } from '@nestjs/graphql';

export enum NOTIFICATION_TYPE {
    NEW_MESSAGE = "NEW_MESSAGE",
    INVITE_ACCEPTED = "INVITE_ACCEPTED",
    NEW_DOCUMENT = "NEW_DOCUMENT",
    NEW_MEALPLAN = "NEW_MEALPLAN",
    NEW_DIETPLAN = "NEW_DIETPLAN"
}


registerEnumType(NOTIFICATION_TYPE, { name: 'NOTIFICATION_TYPE', description: undefined })
