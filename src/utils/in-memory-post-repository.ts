import Post from './post';

export default class InMemoryPostRepository {
    private posts: Post[] = [];

    public async save(post: Post): Promise<void> {
        this.posts.push(post);
    }
}