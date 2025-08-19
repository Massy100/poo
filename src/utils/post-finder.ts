import Post from './post';
import PostRepository from "./post-repository";

export default class PostFinder {
    constructor(private readonly repository: PostRepository) {}

    public async execute(): Promise<Post[]> {
        return await this.repository.findAll();
    }
}