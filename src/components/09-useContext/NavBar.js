import React from 'react'
import { Link, NavLink } from 'react-router-dom';


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"> useContext </Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink exact="true" activeclassname="active" className="nav-link" aria-current="page" to="/">Home</NavLink>
                        <NavLink exact="true" activeclassname="active" className="nav-link" to="/about">About</NavLink>
                        <NavLink exact="true" activeclassname="active" className="nav-link" to="/login">Login</NavLink>
                    </div>
                </div>
        </nav>

        // <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        // <Link className="navbar-brand" to="/">useContext</Link>
        // <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //     <div className="navbar-nav">
        //         <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        //         <Link className="nav-link" to="/about">About</Link>
        //         <Link className="nav-link" to="/login">Login</Link>
        //     </div>
        // </div>
        // </nav>
        // <nav>
        //     <ul>
        //         <li>
        //             <Link to="/">Home</Link> 
        //         </li>
        //         <li>
        //             <Link to="/about">About</Link> 
        //         </li>
        //         <li>
        //             <Link to="/login">Login</Link> 
        //         </li>
        //     </ul>
        // </nav>
    )
}
