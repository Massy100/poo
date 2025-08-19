export default class PostAuthor {
    public readonly value: string;

    constructor(value: string) {
        this.isValidAuthor(value);
        this.value = value;
    }

    private isValidAuthor(author: string): void {
        if (author.length < 2) {
            throw new Error("Author must be at least 2 characters long");
        }
    }
}