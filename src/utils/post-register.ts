import Post from "./post";
import PostgresPostRepository from '@/utils/postgres-post-repository';

export default class PostRegister {
    private readonly repository: PostgresPostRepository;

    constructor(repository: PostgresPostRepository) {
        this.repository = repository;
    }
    
    public async run(title: string, description: string, author: string): Promise<void> {
        const post = new Post(title, description, author);
        await this.repository.save(post);
    }
}