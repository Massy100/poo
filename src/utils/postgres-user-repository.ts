//utils/user-register.ts
import { Sql } from 'postgres';
import User from './user';
import postgres from 'postgres';

export default class PostgresUserRepository {
    private readonly sql: Sql;
    constructor() { 
        const connectionString =
        "postgresql://postgres.ycuqjwordyqjxxczllzh:FN2ZuKVK0XKtARA5@aws-0-us-east-2.pooler.supabase.com:6543/postgres"
        this.sql = postgres(connectionString);
    }

    async save(user: User): Promise<void> {
        try {
            const email = user.email.value;
            const firstname = user.firstname.value;
            const lastname = user.lastname.value;
            await this
            .sql`INSERT INTO users (email, firstname, lastname) VALUES (${email}, ${firstname}, ${lastname});`;
        } catch {
            throw new Error('Failed to save email to database');
        }
    }
}