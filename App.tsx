import Header from "./components/Header"
import Presentation from "./components/Presentation"
import Game from "./components/Game"
import React from "react"

export default function App(){
	console.log("drawing app");
	let [firstGame,setFirstGame] = React.useState(true);
	let [numbers,setNumbers] = React.useState(()=>{
		let tempArray = [];
		for(let i =0;i<10;i++){
			let randomInt = Math.floor(Math.random() * 6) + 1;
			tempArray.push({num:randomInt,frozen:false});
		}
		return tempArray;
	});
	let [isWon, setIsWon] = React.useState(false);
	const numOfFrozen = numbers.filter(numObj => numObj.frozen).length;

	if(numbers.length){
		if(!isWon && numOfFrozen == numbers.length){
			setIsWon(true);
			return;
		}
	};

	function toggleActive(e){
		const targetIndex = e.currentTarget.dataset.id;
		console.log(numOfFrozen, "==?",numbers.length);
		console.log("equal or not:",numOfFrozen == numbers.length);
		setNumbers(
			numbers.map((numObj,index)=> {
				if(index == targetIndex){
					return {...numObj,frozen: !numObj.frozen};
				};
				return numObj;
			})
		);
	};

	function generateNewNumbers(){
		setNumbers(prevNumbers => {
			const tempNumbers = prevNumbers.map(numObj => {
				if(!numObj.frozen){
					let randomInt = Math.floor(Math.random() * 6) + 1;
					return {...numObj,num:randomInt};
				}
				return numObj;
			})
			return tempNumbers;
		})
	}

	function restartGame(){
		setNumbers([]);
		setIsWon(false);
	}

	return (
		<>
			<Header />
			<Presentation />
			<Game 
			numbers={numbers}
			toggleActive={toggleActive}
			isWon={isWon}
			btnAction={isWon ? restartGame:generateNewNumbers}
			/>
		</>
	)
}
