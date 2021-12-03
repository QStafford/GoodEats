import * as React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC<NavbarProps> = props => {

    return (
        <nav className="col-12 d-flex flex-wrap justify-content-between bg-tea">
        <div>
        <NavLink to="/" className="btn btn-sun text-light m-2">Home</NavLink>
        <NavLink to="/login" className="btn btn-sunset text-light m-2">Login</NavLink>
        </div>
        <div>
            <h1 className="basic-font text-light">GoodEats</h1>
        </div>
        <NavLink to="/suggestions" className="btn btn-grass text-light m-2">Suggest a Restaurant!</NavLink>
    </nav>
    )
}

interface NavbarProps { }

export default Navbar;