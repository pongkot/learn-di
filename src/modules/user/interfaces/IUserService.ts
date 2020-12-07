export interface IUserService {
    getUserById(id: number): Array<{ id: number, name: string }>
}
