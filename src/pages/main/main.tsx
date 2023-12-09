import {getDocs, collection} from 'firebase/firestore'
import {db} from '../../config/firebase'
import { useEffect, useState } from 'react';
import { Post } from './post';

export interface PostType {
    id: string;
    userId: string;
    title: string;
    username: string;
    description: string;
    
}
export const Main = () => {
    const [postsList, setPostList] = useState<PostType[] | null>(null);
    const postsRef = collection(db, 'posts');

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostList(
            data.docs.map((doc) => ({...doc.data(), id: doc.id})) as PostType[]
            );
    };

    useEffect(() => {
        getPosts();
    },[]);
   
    return (
        <div>
            <div>{postsList?.map((post) => (
           <Post post={post}/> ))}</div>
        </div>
    );
}