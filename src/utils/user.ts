import UserEmail from "./user-email";
import UserFirstname from "./user-firstname";
import UserLastname from "./user-lastname";

export default class User{
    public email: UserEmail;
    public firstname: UserFirstname;
    public lastname: UserLastname;

    constructor(email: UserEmail, firstname: UserFirstname, lastname: UserLastname) {
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
        
    }

    public static create(email: string, firstname: string, lastname:string): User{
        const user = new User(
            new UserEmail(email),
            new UserFirstname(firstname),
            new UserLastname(lastname)
        );
        return user;
    }
}