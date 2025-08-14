export default class UserLastname {
    public value: string

    constructor(value: string) {
        this.isValidLastname(value);
        this.value = value;
    }

    private isValidLastname(lastname: string): void{
        if (lastname.length < 1) {
            throw new Error('Lastname must be at least 2 characters long');
        }
    }
}