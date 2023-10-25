import React from "react";

//include images into your bundle
import SecondsCounter from "./counter";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<SecondsCounter />
		</div>
	);
};

export default Home;
