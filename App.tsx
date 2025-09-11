import Header from "./components/Header"
import Presentation from "./components/Presentation"
import Game from "./components/Game"
import React from "react"

export default function App(){

	let [firstGame,setFirstGame] = React.useState(true);
	let [numbers,setNumbers] = React.useState([]);

	return (
		<>
			<Header />
			<Presentation />
			<Game 
				numbers={numbers.length?numbers:null}
			/>
		</>
	)
}
