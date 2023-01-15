import React from "react";
import {Link,NavLink} from "react-router-dom";
import CartWidgts from "./Cartwidgets";


const NavBar = () =>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src={"/images/logo.webp"} alt="logo tool" width={100}/></Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to={"/category/rachet"}>rachet</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/llaves"}>wrench</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to={"/category/power tool"}>Power tools</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to={"/category/sockets"}>sockets</NavLink>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </nav>
                </div>
        
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                <CartWidgts />
                </div>
            </div>
        </div>
    )
}

export default NavBar;