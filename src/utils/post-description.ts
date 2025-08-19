export default class PostDescription {
    public readonly value: string;

    constructor(value: string) {
        this.isValidDescription(value);
        this.value = value;
    }

    private isValidDescription(description: string): void {
        if (description.length < 10) {
            throw new Error("Description must be at least 10 characters long");
        }
    }
}