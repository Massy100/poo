import { NextRequest, NextResponse } from 'next/server';
import UserRegister from '@/utils/user-register';
import PostgresUserRepository from '@/utils/postgres-user-repository';
import PostgresPostRepository from '@/utils/postgres-post-repository';
import PostRegister from '@/utils/post-register';

// export async function POST(request: NextRequest) {
//     try {
//         const data = await request.json();

//         //const repository = new InMemoryUserRepository();
//         const repository = new PostgresUserRepository();
//         const registar = new UserRegister(repository);
//         await registar.run(data.email, data.firstname, data.lastname); // se envian los primitivos


//         NextResponse.json({
//             message: 'Email saved successfully',
//         });

//     } catch (error) {
//         console.error('Error saving email:', error);
//         return NextResponse.json({
//             error: 'Failed to save email',
//         }, { status: 500 });
//     }
// }

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const repository = new PostgresPostRepository();
        const register = new PostRegister(repository);
        await register.run(data.title, data.description, data.author);

        return NextResponse.json({
            message: 'Post saved successfully',
        });
    } catch (error) {

        console.error('Error validating post:', error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : 'Failed to validate post',
        }, { status: 400 });
    }
}