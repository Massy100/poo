import User from "./user"
import UserRepository from "./user-repository";

export default class UserRegister implements UserRegister {
    private readonly repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository =  repository;
    }
    public async run(email: string, firstname: string, lastname: string): Promise<void> {
        const user= User.create(email, firstname, lastname);
        await this.repository.save(user);
    }
    
}