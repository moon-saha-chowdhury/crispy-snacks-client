import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const Header = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    let Login;

    if(loggedInUser){
        Login = <Link  className="nav-link p-4 text-success " to="/login">{loggedInUser.name}</Link>


    }
    else{
        Login = <Link  className="nav-link p-4 text-success "  to="/login">Login</Link>

    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light menu ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <h3 className="mb-5 text-success "><strong>Crispy Snacks</strong></h3>
                </a>

                <button className="navbar-toggler position-absolute top-0 start-100 translate-middle mt-5" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav font-weight-bold">
                        <Link className="nav-link active p-4 text-success " aria-current="page" to="/home">Home</Link>
                        <Link className="nav-link p-4 text-success  " to="/orders">Orders</Link>
                        <Link className="nav-link p-4 text-success  " to="/addProducts">Admin</Link>
                        <Link className="nav-link p-4 text-success " to="/home">Deals</Link>
                        <p className="tex-success">{Login} </p>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Header;