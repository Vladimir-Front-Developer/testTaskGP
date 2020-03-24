export interface ChatInfoI {
    id: string,
    name: string,
    user: {
        connection: boolean,
        statusText?: string
    }
}