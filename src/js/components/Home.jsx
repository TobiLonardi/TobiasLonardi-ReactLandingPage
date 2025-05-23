import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Header from "./Header";

import Jumbotron from "./Jumbotron"

import Cards from "./Cards"

import Footer from "./Footer"

//create your first component
const card = [
	{
		image: "https://picsum.photos/id/10/200/150",
		title: "Primer titulo",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris nec nulla fermentum posuere."
	},
	{
		image: "https://picsum.photos/id/10/200/150",
		title: "Segundo titulo",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris nec nulla fermentum posuere."
	},
	{
		image: "https://picsum.photos/id/10/200/150",
		title: "Tercer titulo",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris nec nulla fermentum posuere."
	},
	{
		image: "https://picsum.photos/id/10/200/150",
		title: "Cuarto titulo",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris nec nulla fermentum posuere."
	}
]

const Home = () => {
	return (
		<>
			<Header />
			<div className="container">
				<Jumbotron />
				<div className="row">
					{
						card.map((item,key)=>(
							<Cards
								key = {key}
							 	cards = {item} />
						))
					}
				</div>

			</div>
			<Footer/>
		</>

	);
};

export default Home;