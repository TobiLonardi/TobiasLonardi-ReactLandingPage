import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Header from "./Header";

import Jumbotron from "./Jumbotron"

import Cards from "./Card"

//create your first component
const Home = () => {
	return (
		<div>
			<Header />
			<div className="container">
				<Jumbotron/>
			</div>

		</div>

	);
};

export default Home;