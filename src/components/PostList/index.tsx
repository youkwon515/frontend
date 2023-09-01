import { useState, useEffect } from "react";
import Post from '../Post';
import * as S from './styled';

import { GetPostList } from '../../api';

function PostList() {

    const [posts, setPosts] = useState<string[] | null>([]);
    
    useEffect(() => {
        async function fetchPostList() {
            try {
                const postArr: string[] | null = await GetPostList();
                setPosts(postArr);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPostList();
    }, []);

    return (
        <S.PostListSection>
            <S.ContentsDiv>
                {posts ? posts.map((title, idx) => {
                    const id: string = idx.toString();
                    return <Post id={id} title={title} />
                }) : ''}
            </S.ContentsDiv>
        </S.PostListSection>
    );
}

export default PostList;