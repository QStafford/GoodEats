import * as React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import type { IPost } from '../../server/utils/types';


const PostCard: React.FC<PostCardProps> = props => {

    return (
        <div className="card m-2">
            <div className="card-body">
                <div className="d-flex justify-content-end">
                    <p className="card-text basic-font">{props.post._created}</p>
                </div>
                <img className="card-img-top" src={`../../../public/assets/postimages/cardimage-${props.post.id}`} alt={props.post.title} />
                <div className="d-flex justify-content-between">
                    <p className="card-text basic-font">{props.post.username}</p>
                    <p className="card-text basic-font">{props.post.restaurantname}</p>
                </div>
                <p className="card-text text-center basic-font">{props.post.content}</p>
                <p className="card-text text-center basic-font">{props.post.tags}</p>
            </div>
            <Link to={`/edit/${props.post.id}`} className="btn btn-sm btn-sunset text-light basic-font m-2">Edit Post</Link>
        </div>
    )
}

interface PostCardProps {
    post: IPost
}

export default PostCard;