import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import Header from "./Header";

import Jumbotron from "./Jumbotron"

import Cards from "./Cards"

//create your first component
const card = [
	{
		image: "https://picsum.photos/id/10/200/300",
		title: "Primer titulo",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris nec nulla fermentum posuere. Proin fringilla, odio ut blandit finibus, erat lorem aliquet sem, eget iaculis lectus turpis ut nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere."
	},
	{
		image: "https://picsum.photos/id/10/200/300",
		title: "Segundo titulo",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris nec nulla fermentum posuere. Proin fringilla, odio ut blandit finibus, erat lorem aliquet sem, eget iaculis lectus turpis ut nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere."
	},
	{
		image: "https://picsum.photos/id/10/200/300",
		title: "Tercer titulo",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris nec nulla fermentum posuere. Proin fringilla, odio ut blandit finibus, erat lorem aliquet sem, eget iaculis lectus turpis ut nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere."
	},
	{
		image: "https://picsum.photos/id/10/200/300",
		title: "Tercer titulo",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae mauris nec nulla fermentum posuere. Proin fringilla, odio ut blandit finibus, erat lorem aliquet sem, eget iaculis lectus turpis ut nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere."
	}
]

const Home = () => {
	return (
		<div>
			<Header />
			<div className="container">
				<Jumbotron />
				<div className="row">
					{
						card.map((item,key)=>(
							<div key={key}>
							<Cards cards = {item} />
							</div>
						))
					}
				</div>

			</div>

		</div>

	);
};

export default Home;