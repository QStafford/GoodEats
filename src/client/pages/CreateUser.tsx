import * as React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const createUser: React.FC<createUserProps> = (props) => {
    document.body.className = "login-bg";

    return (
        <>
            <div className="container d-flex flex-wrap justify-content-center">
                <div className="col-4 card bg-light mt-4" >
                    <form>
                        <h2 className="basic-font text-center m-3">Welcome to GoodEats!</h2>
                        <h1 className="basic-font text-center m-3">Sign Up:</h1>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Create Password"></input>
                        </div>
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="Confirm Password"></input>
                        </div>
                        <div className="input-group mb-3">
                            <input type="Email" className="form-control" placeholder="Email"></input>
                        </div>
                        <div className="col-12 d-flex flex-wrap justify-content-center m-2">
                            <button className="btn btn-sunset basic-font text-light">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

interface createUserProps { }

export default createUser;