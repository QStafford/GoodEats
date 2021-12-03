import * as React from 'react';
import moment from 'moment';
import type { IPost } from '../../server/utils/types';


const PostCard: React.FC<PostCardProps> = props => {

    return (
        <div className="card">
            <div className="card-body">
                <p className="card-text">{props.post._created}</p>
                <p className="card-title fw-bold">{props.post.title}</p>
                <p className="card-text">{}</p>
                <div className="d-flex justify-content-between">
                    <p className="card-text">{props.post.username}</p>
                    <p className="card-text">{props.post.restaurantname}</p>
                </div>
                <p className="card-text">{props.post.content}</p>
                <p className="card-text">{props.post.tags}</p>
            </div>
        </div>
    )
}

interface PostCardProps {
    post: IPost
}

export default PostCard;