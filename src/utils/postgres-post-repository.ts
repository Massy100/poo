import { Sql } from 'postgres';
import postgres from 'postgres';
import Post from './post';

export default class PostgresPostRepository {
    private readonly sql: Sql;
    constructor() { 
        const connectionString =
        "postgresql://postgres.ycuqjwordyqjxxczllzh:FN2ZuKVK0XKtARA5@aws-0-us-east-2.pooler.supabase.com:6543/postgres"
        this.sql = postgres(connectionString);
    }

    async save(post: Post): Promise<void> {
        try {
            await this
            .sql`INSERT INTO posts (title, description, author) VALUES (${post.title}, ${post.description}, ${post.author});`;
        } catch {
            throw new Error('Failed to save post to database');
        }
    }
}