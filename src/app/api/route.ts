import { NextRequest, NextResponse } from 'next/server';
import UserRegister from '@/utils/user-register';
import PostgresUserRepository from '@/utils/postgres-user-repository';


export async function POST(request: NextRequest) {
    try {
        const data = await request.json();

        //const repository = new InMemoryUserRepository();
        const repository = new PostgresUserRepository();
        const registar = new UserRegister(repository);
        await registar.run(data.email, data.firstname, data.lastname); // se envian los primitivos


        NextResponse.json({
            message: 'Email saved successfully',
        });

    } catch (error) {
        console.error('Error saving email:', error);
        return NextResponse.json({
            error: 'Failed to save email',
        }, { status: 500 });
    }
}