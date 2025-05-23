import React from "react";

const Cards = (props) => {
    const {image, title, description} = props.cards;
    return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card">
                    <img src={props.cards.image} className="card-img-top" alt="..."/>
                        <div className="card-body text-center">
                            <h5 className="card-title">{props.cards.title}</h5>
                            <p className="card-text">{props.cards.description}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
            </div>


    )
}

export default Cards;