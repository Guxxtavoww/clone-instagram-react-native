export interface IPost {
    id: number | string; 
    name: string; 
    desc: string; 
    profileImage: string; 
    postImage: string;  
    isLiked: boolean; 
    likes: number;
}