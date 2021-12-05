import * as React from 'react';

const Login: React.FC<LoginProps> = (props) => {
    return (
        <>
            <main className="container">
                <section className="row">
                    <div className="col-12">
                        <h1 className="display-1 text-center">Login View</h1>
                    </div>
                </section>
            </main>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
            </div>
            <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password"></input>
            </div>
            
        </>

    )
}

interface LoginProps { }

export default Login;