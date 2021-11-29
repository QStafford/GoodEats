import * as React from 'react';

const Post: React.FC<PostProps> = (props) => {
	return (
		<>
			<h1>Post</h1>
            <div class="mb-3">
                <label for="restaurantPost" class="form-label">Choose a Restaurant:</label>
                <input type="text" class="form-control" id="restaurantPost" placeholder="Yum Yum"></input>
            </div>
            <div class="mb-3">
                <label for="yourThoughts" class="form-label">Your thoughts:</label>
                <textarea class="form-control" id="yourThoughts" rows="3"></textarea>
            </div>
            <div class="input-group mb-3">
                <label for="restaurantPic" class="form-label">Choose a Photo:</label>
                <input type="file" class="form-control" id="restaurantPic"></input>
                <label class="input-group-text" for="restaurantPic">Post</label>
            </div>
            <div class="mb-3">
                <label for="postTags" class="form-label">Tag your post:</label>
                <input type="text" class="form-control" id="postTags" placeholder="Tags"></input>
            </div>
		</>
	
	)}

interface PostProps {}

export default Post;