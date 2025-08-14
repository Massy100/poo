export default class UserFirstname {
    public value: string

    constructor(value: string) {
        this.isValidFirstname(value);
        this.value = value;
    }

    private isValidFirstname(firstname: string): void{
        if (firstname.length < 1) {
            throw new Error('Firstname must be at least 2 characters long');
        }
    }
}