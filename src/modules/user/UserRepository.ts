import {IUserRepository} from "./interfaces";

export class UserRepository implements IUserRepository {
    private readonly list = [
        {
            id: 1,
            name: 'User A'
        },
        {
            id: 2,
            name: 'User B'
        },
        {
            id: 3,
            name: 'User C'
        }
    ]

    listUsers(): Array<{ id: number; name: string }> {
        return this.list;
    }
}
