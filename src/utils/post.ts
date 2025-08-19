import PostTitle from "./post-title";
import PostDescription from "./post-description";
import PostAuthor from "./post-author";

export default class Post {
    constructor(
        public readonly title: PostTitle,
        public readonly description: PostDescription,
        public readonly author: PostAuthor
    ) {}

    public static create(title: string, description: string, author: string): Post {
        return new Post(
            new PostTitle(title),
            new PostDescription(description),
            new PostAuthor(author)
        );
    }
}