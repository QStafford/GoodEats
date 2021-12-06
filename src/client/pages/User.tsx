import * as React from 'react';
import * as moment from "moment";
import { Link, useParams } from "react-router-dom";
import type { IUser, IPost } from "../../server/utils/types";

const User: React.FC<UserProps> = (props) => {

	document.body.className = "user-bg";
        
	const { userid } = useParams();
	const [user, setUser] = React.useState<IUser>(null);
	const [posts, setPosts] = React.useState<IPost[]>([]);
	
	React.useEffect(() => {
		(async () => {
		  const res = await fetch(`/api/users/${userid}`);
		  const user = await res.json();
		  const res2 = await fetch(`/api/posts/${userid}`);
		  const posts = await res2.json();
	
		  setUser(user);
		  setPosts(posts);
		})();
	  }, []);

	return (
		<>
			<main className="container">
				<section className="row">
					<div className="col-12">
						<h1 className="display-1 text-center">User View</h1>
					</div>
				</section>
			</main>
		</>
	
	)}

interface UserProps {}

export default User;