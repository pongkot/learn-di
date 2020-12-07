export interface IProfileService {
    getUserAProfile(): { subject: 'profile', name: string, id: number, retrieveAt: Date }
}
