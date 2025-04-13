import React from "react";

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid bg-dark" >
                <a class="navbar-brand text-light" href="#">Navbar</a>
                <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon bg-dark-subtle"></span>
                </button>
                <div class="d-lg-flex justify-content-end collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;