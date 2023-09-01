import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import Markdown from "../Markdown";
import * as S from './styled';

import { GetPostContent } from "../../api";

function BlogPost() {

    const { id } =  useParams<string>();
    const [postContent, setPostContent] = useState<string | null>('');
    
    useEffect(() => {
        async function fetchPostContent() {
            try {
                const Content: string | null = await GetPostContent(id);
                setPostContent(Content);
            } catch (error) {
                console.error(error);
            }
        }
        fetchPostContent();
    }, []);
  
    return (
        <S.BlogPostSection>
            <S.ContentsDiv>
                <Markdown markdown={postContent || ''} />
            </S.ContentsDiv>
        </S.BlogPostSection>
    );
}

export default BlogPost;