import * as React from 'react';
import * as moment from "moment";
import { Link, useParams } from "react-router-dom";
import type { IUser, IPost, ITag } from "../../server/utils/types";

const User: React.FC<UserProps> = (props) => {
	const { id } = useParams();
	const [user, setUser] = React.useState<IUser>(null);
	const [cardtags, setCardTags] = React.useState<ITag[]>([]);
	const [posts, setPosts] = React.useState<IPost[]>([]);
	
	React.useEffect(() => {
		(async () => {
		  const res = await fetch(`/api/users/${id}`);
		  const user = await res.json();
		  const res2 = await fetch(`/api/card_data/users/${id}`);
		  const posts = await res2.json();
		  posts.forEach(async card => {

			const res3 = await fetch(`/api/cardtags/${card.id}`);
			const currentTags = await res3.json();
			setCardTags([...cardtags, currentTags]);
		})
	
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