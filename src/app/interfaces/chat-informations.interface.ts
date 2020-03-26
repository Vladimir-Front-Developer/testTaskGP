import { MessageI } from './message.interface';

export interface ChatInfoI {
    id: string,
    name: string,
    user: {
        connection: boolean,
        statusText?: string
    },
    messages?: Array<MessageI>
}