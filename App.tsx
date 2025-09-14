import Header from "./components/Header"
import Presentation from "./components/Presentation"
import Game from "./components/Game"
import React from "react"

export default function App(){
	console.log("drawing app");
	let [firstGame,setFirstGame] = React.useState(true);
	let [numbers,setNumbers] = React.useState([]);
	let [isWon, setIsWon] = React.useState(false);


	if(!numbers.length){
		let tempArray = [];
		for(let i =0;i<10;i++){
			let randomInt = Math.floor(Math.random() * 6) + 1;
			tempArray.push({num:randomInt,frozen:false});
		}
		setNumbers(tempArray);
	}

	function toggleActive(e){
		console.log("toggling active class");
		const el = e.currentTarget;
		const elIndex = el.dataset.id;
		if(el.classList.contains("active")){
			el.classList.remove("active");
			numbers[elIndex].frozen = false;
		}else{
			el.classList.add("active");
			numbers[elIndex].frozen = true;
			if(checkWin()){
				setIsWon(true);
			};
		};
	}

	function checkWin(){
		let targetNum = null;
		return numbers.every(numObj => {
			if(!targetNum){
				targetNum = numObj.num;
			}
			return numObj.frozen && numObj.num == targetNum;
		});
	}

	function generateNewNumbers(){
		console.log("gen new nums running...");
		setNumbers(prevNumbers => {
			console.log("prev nums: ",prevNumbers);
			const tempNumbers = prevNumbers.map(numObj => {
				if(!numObj.frozen){
					let randomInt = Math.floor(Math.random() * 6) + 1;
					return {...numObj,num:randomInt};
				}
				return numObj
			})
			console.log("temp nums is: ",tempNumbers);
			return tempNumbers;
		})
	}

	function restartGame(){
		setNumbers([]);
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
