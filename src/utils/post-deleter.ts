import PostRepository from "./post-repository";

export default class PostDeleter {
    constructor(private readonly repository: PostRepository) {}

    public async execute(id: string): Promise<void> {
        const post = await this.repository.findById(id);
        if (!post) throw new Error("Post not found");
        
        await this.repository.delete(id);
    }
}