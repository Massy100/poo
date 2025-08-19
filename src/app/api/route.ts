import { NextRequest, NextResponse } from 'next/server';
import UserRegister from '@/utils/user-register';
import PostgresUserRepository from '@/utils/postgres-user-repository';
import PostgresPostRepository from '@/utils/postgres-post-repository';
import PostRegister from '@/utils/post-register';
import PostFinder from "@/utils/post-finder";
import PostUpdater from "@/utils/post-updater";
import PostRepository from '@/utils/post-repository';

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

// GET - Obtener todos los posts
export async function GET() {
    try {
        const repository = new PostgresPostRepository();
        const finder = new PostFinder(repository);
        const posts = await finder.execute();

        return NextResponse.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : 'Failed to fetch posts',
        }, { status: 500 });
    }
}

// POST - Crear un nuevo post
export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const repository = new PostgresPostRepository();
        const register = new PostRegister(repository);
        
        // Usa execute() en lugar de run() - verifica el nombre del método
        await register.run(data.title, data.description, data.author);

        return NextResponse.json({
            message: 'Post created successfully',
        }, { status: 201 });

    } catch (error) {
        console.error('Error creating post:', error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : 'Failed to create post',
        }, { status: 400 });
    }
}

// PUT - Actualizar un post existente
export async function PUT(
    request: NextRequest,
    context: { params: { id: string } } 
) {
    try {
        const data = await request.json();
        const repository = new PostgresPostRepository();
        const updater = new PostUpdater(repository);

        await updater.execute(context.params.id, data.title, data.description);
        
        return NextResponse.json({ 
            success: true,
            message: 'Post updated successfully' 
        });
    } catch (error) {
        console.error('Error updating post:', error);
        return NextResponse.json({ 
            error: error instanceof Error ? error.message : 'Failed to update post'
        }, { status: 400 });
    }
}