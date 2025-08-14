import repository from './user-repository';
import User from './user';

export default class InMemoryUserRepository {
    private users: Array<{
        email: string;
        firstname: string;
        lastname: string;
    }> = [];

    constructor(){
        this.users = [];
    }

    public async save(user: User): Promise<void>{
        const email = user.email.value
        const firstname = user.firstname.value 
        const lastname = user.lastname.value

        this.users.push({
            email,
            firstname,
            lastname
        });
    }
            
}