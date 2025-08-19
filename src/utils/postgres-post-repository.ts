import { Sql } from 'postgres';
import postgres from 'postgres';

export default class PostgresPostRepository {
    private readonly sql: Sql;
    constructor() { 
        const connectionString =
        "postgresql://postgres.ycuqjwordyqjxxczllzh:FN2ZuKVK0XKtARA5@aws-0-us-east-2.pooler.supabase.com:6543/postgres"
        this.sql = postgres(connectionString);
    }

    async save(title: string, description: string, author: string): Promise<void> {
        try {
            await this
            .sql`INSERT INTO posts (title, description, author) VALUES (${title}, ${description}, ${author});`;
        } catch {
            throw new Error('Failed to save post to database');
        }
    }
}