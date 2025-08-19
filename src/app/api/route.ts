import { NextRequest, NextResponse } from 'next/server';
import UserRegister from '@/utils/user-register';
import PostgresUserRepository from '@/utils/postgres-user-repository';


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
        
        if (!data.title || data.title.length < 3) {
            throw new Error('Title must be at least 3 characters long');
        }
        if (!data.description || data.description.length < 10) {
            throw new Error('Description must be at least 10 characters long');
        }
        if (!data.author || data.author.length < 2) {
            throw new Error('Author must be at least 2 characters long');
        }

        return NextResponse.json({
            message: 'Post data validated successfully',
        });

    } catch (error) {
        console.error('Error validating post:', error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : 'Failed to validate post',
        }, { status: 400 });
    }
}