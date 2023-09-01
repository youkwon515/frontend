import { Link } from 'react-router-dom';
import * as S from './styled';

import type { PostType } from '../../types/Post';

function Post({id, title} : PostType) {
    return (
        <Link to={'/post/'+ id}>
            <S.PostDiv>
                <p>{title}</p>
                <p>youkwon</p>
            </S.PostDiv>
        </Link>
    );
}

export default Post;