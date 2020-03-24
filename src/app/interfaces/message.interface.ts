export interface MessageI {
    user: {
        id: string,
        name: string,
        img: string,
    },
    msg: string,
    uptime: number
}