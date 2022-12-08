import React from "react";
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}>Burger King</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <NavLink className="nav-link" activeclassname="active" to={"/"}>Home</NavLink>
                                    <NavLink className="nav-link" activeclassname="active" to={"/categoria/carne"}>Carne</NavLink>
                                    <NavLink className="nav-link" activeclassname="active" to={"/categoria/pollo"}>Pollo</NavLink>
                                    <NavLink className="nav-link" activeclassname="active" to={"/categoria/ensalada"}>Ensaladas</NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar;