import * as React from 'react';

const Suggestions: React.FC<SuggestionsProps> = (props) => {
	return (
		<>
			<h1>Suggestions</h1>
            <div className="mb-3">
                <label for="restaurantPost" className="form-label">Restaurant Name:</label>
                <input type="text" className="form-control" id="restaurantPost" placeholder="Yum Yum"></input>
            </div>
            <div className="mb-3">
                <label for="postTags" className="form-label">Tag your post:</label>
                <input type="text" className="form-control" id="postTags" placeholder="Tags"></input>
            </div>
            <div className="mb-3">
                <label for="Cuisine" className="form-label">Type of Cuisine:</label>
                <input type="text" className="form-control" id="Cuisine" placeholder="Cuisine"></input>
            </div>
		</>
	
	)}

interface SuggestionsProps {}

export default Suggestions;