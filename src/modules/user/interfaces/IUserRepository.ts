export interface IUserRepository {
    listUsers(): Array<{ id: number, name: string }>
}
