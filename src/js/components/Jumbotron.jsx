import React from "react";

const Jumbotron = () =>{
    return(
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">A Warm Welcome</h1>
                <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel sem at turpis cursus hendrerit. Donec blandit, nisl at convallis porta, metus risus suscipit nulla, ac ornare.</p>
                <a href="#" className="btn btn-primary">Call to action</a>

            </div>
        </div>
    )
}

export default Jumbotron;