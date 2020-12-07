import {UserModule} from "../user";
import {IProfileService} from "./interfaces";
import {ProfileService} from "./ProfileService";

export class ProfileModule {
    // Create Singleton
    private static instance = new ProfileModule()

    static getInstance(): ProfileModule {
        return this.instance
    }

    // Dependency Injection by property
    private readonly userModule: UserModule = UserModule.getInstance()

    service(): IProfileService {
        return new ProfileService(this.userModule.service())
    }
}
