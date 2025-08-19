import PostRepository from "./post-repository";

export default class PostUpdater {
    constructor(private readonly repository: PostRepository) {}

    public async execute(
        id: string,
        title: string,
        description: string
    ): Promise<void> {
        const post = await this.repository.findById(id);
        if (!post) throw new Error("Post not found");
        
        const updatedPost = post.update(title, description);
        await this.repository.update(updatedPost);
    }
}