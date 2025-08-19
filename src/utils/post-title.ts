export default class PostTitle {
    public value: string

    constructor(value: string) {
        this.isValidTitle(value);
        this.value = value;
    }

    private isValidTitle(title: string): void {
        if (title.length < 3) {
            throw new Error('Title must be at least 3 characters long');
        }
    }
}