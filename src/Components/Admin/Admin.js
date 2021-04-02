import React from 'react';
import { Link } from 'react-router-dom';


const Admin = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-success menu ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <h3 className="mb-5 text-light "><strong>Admin</strong></h3>
                </a>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav font-weight-bold">
                    <Link className="nav-link p-4 text-light  " to="/home">Home</Link>
                        <Link className="nav-link p-4 text-light  " to="/addProducts">Add Product</Link>
                        <Link className="nav-link p-4 text-light  " to="/manageProduct">Manage Product</Link>
                    </div>
                </div>
            </div>
        </nav>
        </div>
    );
};

export default Admin;