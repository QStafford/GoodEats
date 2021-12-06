import * as React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC<LoginProps> = (props) => {

    document.body.className = "login-bg";

    return (

        <>
            <main className="container d-flex flex-wrap justify-content-center">
                <div className="col-4 card bg-light mt-4" >
                    <form>
                        <h2 className="basic-font text-center m-3">Welcome to GoodEats!</h2>
                        <h1 className="basic-font text-center m-3">Login:</h1>
                        <div className="form-group m-3">
                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                        </div>
                        <div className="form-group m-3">
                            <input type="password" className="form-control" placeholder="Password"></input>
                        </div>
                        <div className="col-12 d-flex flex-wrap justify-content-center">
                        <button className="btn btn-fire basic-font text-light">Login</button>
                        </div>
                    </form>
                    <div className="d-flex flex-wrap justify-content-center">
                        <p className="basic-font text-center m-2">Or:</p>
                        <div className="col-12 d-flex flex-wrap justify-content-center m-2">
                        <Link to="/Create" className="btn btn-sunset basic-font text-light">Create New User</Link>
                        </div>
                    </div>
                </div>
            </main>
        </>

    )
}

interface LoginProps { }

export default Login;