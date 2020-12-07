import {IUserRepository, IUserService} from "./interfaces";

export class UserService implements IUserService {
    constructor(
        private readonly userRepository: IUserRepository
    ) {
    }

    getUserById(id: number): Array<{ id: number; name: string }> {
        return this.userRepository.listUsers().filter((record: { id: number, name: string }) => record.id === id)
    }
}
