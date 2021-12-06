import * as React from 'react';
import * as moment from "moment";
import { Link, useParams } from "react-router-dom";
import type { IUser, IPost } from "../../server/utils/types";
import card_data from '../../server/db/queries/card_data';
import PostCard from '../components/PostCard';

const User: React.FC<UserProps> = (props) => {
        
	const { userid } = useParams();
	const [user, setUser] = React.useState<IUser>(null);
	const [posts, setPosts] = React.useState<IPost[]>([]);
	
	React.useEffect(() => {
		(async () => {
		  const res = await fetch(`/api/users/${userid}`);
		  const user = await res.json();
		  const res2 = await fetch(`/api/card_data/${userid}`);
		  const posts = await res2.json();
	
		  setUser(user);
		  setPosts(posts);
		})();
	  }, []);

	return (
		<>
			<main className="container d-flex flex-wrap justify-content-center user-nomar">
				{/* header that pulls the username to display  */}
					<div className="d-flex flex-wrap bg-rust user-header p-4">
						<h1 className="basic-font text-light">{user.username}</h1>
					</div>
					{/* card feed container*/}
					<div className="container col-8 d-flex flex-wrap justify-content-center m-2">
					{posts.map(post => (
                        <PostCard key = {`postcard-${post.id}`} post={post}/>
                    ))}
					</div>
			</main>
		</>
	
	)}

interface UserProps {}

export default User;