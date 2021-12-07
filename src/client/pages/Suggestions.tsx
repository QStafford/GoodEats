import * as React from 'react';

const Suggestions: React.FC<SuggestionsProps> = (props) => {

    document.body.className = "suggest-bg";
    
	return (
		<>
             <main className="container d-flex flex-wrap justify-content-center">
                <div className="col-4 card bg-light mt-4" >
			        <h1 className="basic-font text-center m-3">Suggestions</h1>
                     <div className="mb-3">
                         <label htmlFor="restaurantPost" className="form-label basic-font text-center m-2">Restaurant Name:</label>
                         <input type="text" className="form-control" id="restaurantPost" placeholder="Yum Yum"></input>
                    </div>
                     <div className="mb-3">
                        <label htmlFor="postTags" className="form-label orm-label basic-font text-center m-2">Tag your post:</label>
                        <input type="text" className="form-control" id="postTags" placeholder="Tags"></input>
                    </div>
                     <div className="mb-3">
                         <label htmlFor="Cuisine" className="form-label orm-label basic-font text-center m-2">Type of Cuisine:</label>
                        <input type="text" className="form-control" id="Cuisine" placeholder="Cuisine"></input>
                    
                    </div>
                    <div className="d-flex flex-wrap justify-content-center">
                       
                        <div className="col-12 d-flex flex-wrap justify-content-center m-2">
                        <div className="btn btn-sunset basic-font text-light">Add Restaurant</div>
                        </div>
                    </div>
                </div>
            </main>
		</>
	 )
}

interface SuggestionsProps { }

export default Suggestions;