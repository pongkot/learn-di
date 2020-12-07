import {UserRepository} from "./UserRepository";
import {UserService} from "./UserService";
import {IUserRepository, IUserService} from "./interfaces";

export class UserModule {
    private static instance = new UserModule()

    static getInstance(): UserModule {
        return this.instance
    }

    service(): IUserService {
        return new UserService(this.repository())
    }

    private repository(): IUserRepository {
        return new UserRepository()
    }
}
