import * as React from 'react';

const Post: React.FC<PostProps> = (props) => {
	return (
		<>
			<main className="container">
				<section className="row">
					<div className="col-12">
						<h1 className="display-1 text-center">Post View</h1>
					</div>
				</section>
			</main>
		</>
	
	)}

interface PostProps {}

export default Post;