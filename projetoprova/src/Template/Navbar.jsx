import './Navbar.css'
import React from 'react'

export default props =>

    <nav className="navbar navbar-expand-lg navbar-dark">
        <button className="navbar-toggler d-lg-block" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <a className="navbar-brand" href="#">Ria</a>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Ria&You <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Events</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Blogs</a>
                </li>
            </ul>
        </div>
    </nav>