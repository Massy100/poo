import Post from "./post";

export default interface PostRepository {
    save(post: Post): Promise<void>;
    findAll(): Promise<Post[]>;      
    findById(id: string): Promise<Post | null>; 
    update(post: Post): Promise<void>; 
    delete(id: string): Promise<void>;  
}