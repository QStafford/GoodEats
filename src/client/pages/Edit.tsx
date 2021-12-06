import * as React from 'react';


const Edit: React.FC<EditProps> = (props) => {

    document.body.className = "edit-post-bg";

	return (
		<>
			<h1>Edit</h1>
            <div className="mb-3">
                <label for="restaurantPost" className="form-label">Choose a Restaurant:</label>
                <input type="text" className="form-control" id="restaurantPost" placeholder="Yum Yum"></input>
            </div>
            <div className="mb-3">
                <label for="yourThoughts" className="form-label">Your thoughts:</label>
                <textarea className="form-control" id="yourThoughts" rows="3"></textarea>
            </div>
            <div className="input-group mb-3">
                <label for="restaurantPic" className="form-label">Choose a Photo:</label>
                <input type="file" className="form-control" id="restaurantPic"></input>
                <label className="input-group-text" for="restaurantPic">Post</label>
            </div>
            <div className="mb-3">
                <label for="postTags" className="form-label">Tag your post:</label>
                <input type="text" className="form-control" id="postTags" placeholder="Tags"></input>
            </div>
		</>
	
	)}

interface EditProps {}

export default Edit;

/* <div>
            <h1>Edit</h1>
            <div className="mb-3">
                <label for="restaurantPost" className="form-label">Choose a Restaurant:</label>
                <input type="text" className="form-control" id="restaurantPost" placeholder="Yum Yum"></input>
            </div>
            <div className="mb-3">
                <label for="yourThoughts" className="form-label">Your thoughts:</label>
                <textarea className="form-control" id="yourThoughts" rows="3"></textarea>
            </div>
            <div className="input-group mb-3">
                <label for="restaurantPic" className="form-label">Choose a Photo:</label>
                <input type="file" className="form-control" id="restaurantPic"></input>
                <label className="input-group-text" for="restaurantPic">Post</label>
            </div>
            <div className="mb-3">
                <label for="postTags" className="form-label">Tag your post:</label>
                <input type="text" className="form-control" id="postTags" placeholder="Tags"></input>
            </div>
        </div>
        */