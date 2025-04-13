import React from "react";

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid bg-dark" >
                <a className="navbar-brand text-light" href="#">Navbar</a>
                <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon bg-dark-subtle"></span>
                </button>
                <div className="d-lg-flex justify-content-end collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;