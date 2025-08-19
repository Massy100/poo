// utils/postgres-post-repository.ts
import { Sql } from 'postgres';
import postgres from 'postgres';
import Post from './post';
import PostRepository from './post-repository';

export default class PostgresPostRepository implements PostRepository {
    private readonly sql: Sql;
    
    constructor() { 
        const connectionString = "postgresql://postgres.ycuqjwordyqjxxczllzh:FN2ZuKVK0XKtARA5@aws-0-us-east-2.pooler.supabase.com:6543/postgres";
        this.sql = postgres(connectionString);
    }

    async save(post: Post): Promise<void> {
        try {
            await this.sql`
                INSERT INTO posts (id, title, description, author) 
                VALUES (${post.id}, ${post.title.value}, ${post.description.value}, ${post.author.value})
            `;
        } catch {
            throw new Error('Failed to save post to database');
        }
    }

    async findAll(): Promise<Post[]> {
        try {
            const posts = await this.sql`
                SELECT * FROM posts ORDER BY created_at DESC
            `;
            
            return posts.map(row => 
                new Post(row.id, row.title, row.description, row.author)
            );
        } catch {
            throw new Error('Failed to fetch posts');
        }
    }

    async findById(id: string): Promise<Post | null> {
        try {
            const [post] = await this.sql`
                SELECT * FROM posts WHERE id = ${id}
            `;
            
            return post ? new Post(post.id, post.title, post.description, post.author) : null;
        } catch {
            throw new Error('Failed to find post');
        }
    }

    async update(post: Post): Promise<void> {
        try {
            await this.sql`
                UPDATE posts 
                SET title = ${post.title.value}, 
                    description = ${post.description.value}
                WHERE id = ${post.id}
            `;
        } catch {
            throw new Error('Failed to update post');
        }
    }

    async delete(id: string): Promise<void> {
        try {
            await this.sql`
                DELETE FROM posts WHERE id = ${id}
            `;
        } catch {
            throw new Error('Failed to delete post');
        }
    }
}