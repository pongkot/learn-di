import {IProfileService} from "./interfaces";
import {IUserService} from "../user/interfaces";

export class ProfileService implements IProfileService {
    constructor(
        private readonly userService: IUserService
    ) {
    }

    getUserAProfile(): { subject: "profile"; name: string; id: number; retrieveAt: Date } {
        const userA: { id: number, name: string } = this.userService.getUserById(1)[0]
        return {
            subject: 'profile',
            name: userA.name,
            id: userA.id,
            retrieveAt: new Date(),
        }
    }
}
