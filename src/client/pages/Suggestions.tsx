import * as React from 'react';

const Suggestions: React.FC<SuggestionsProps> = (props) => {

    document.body.className = "suggest-bg";

    return (
        <>
            <main className="container d-flex flex-wrap justify-content-center">
                <div  style = {{backgroundColor: '#FD5B28', color: "white"}} className = "container d-flex flex-wrap justify-content-left">
                    <h1 className = "d-flex flex-wrap justify-content-center">Do you know a restaurant that we haven't added yet? Send your restaurant suggestion in here!</h1>
                </div>
                <div className="col-5 card bg-light mt-5" >
                    <form>
                        <div className="mb-4">
                            <label for="restaurantPost" className="form-label">Restaurant Name:</label>
                            <input type="text" className="form-control" id="restaurantPost" placeholder="Yum Yum"></input>
                        </div>
                        <div className="mb-4">
                            <label for="postTags" className="form-label">Tag your post:</label>
                            <input type="text" className="form-control" id="postTags" placeholder="Tags"></input>
                        </div>
                        <div className="mb-4">
                            <label for="Cuisine" className="form-label">Type of Cuisine:</label>
                            <input type="text" className="form-control" id="Cuisine" placeholder="Cuisine"></input>
                        </div>
                        <div className="d-flex flex-wrap justify-content-center">
                            <button className="btn btn-sunset basic-font text-light">Submit</button>
                        </div>
                    </form>
                </div>
            </main>
        </>

    )
}

interface SuggestionsProps { }

export default Suggestions;