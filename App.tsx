import Header from "./components/Header"
import Presentation from "./components/Presentation"
import Game from "./components/Game"
import React from "react"

export default function App(){
	let [isWon, setIsWon] = React.useState(false);
	let [numbers,setNumbers] = React.useState(()=>{
		let tempArray = [];
		for(let i =0;i<10;i++){
			let randomInt = Math.floor(Math.random() * 6) + 1;
			tempArray.push({num:randomInt,frozen:false});
		}
		return tempArray;
	});

	function checkWin(){
		let targetNum = null;
		let numOfDice = 0;
		const numOfFrozen = numbers.filter(numObj => {
			if(numObj.frozen){
				if(!targetNum){
					targetNum = numObj.num;
				}
				if(targetNum == numObj.num){
					numOfDice +=1;
				}
				return numObj;
			}
		}).length;

		if(numbers.length && numOfDice == numbers.length){
			if(!isWon ){
				setIsWon(true);
				return;
			}
		};
	}

	function toggleActive(e){
		const targetIndex = e.currentTarget.dataset.id;
		setNumbers(
			numbers.map((numObj,index)=> {
				if(index == targetIndex){
					return {...numObj,frozen: !numObj.frozen};
				};
				return numObj;
			})
		);
	};

	function generateNewNumbers(event,reset){
		setNumbers(prevNumbers => {
			const tempNumbers = prevNumbers.map(numObj => {
				let randomInt = Math.floor(Math.random() * 6) + 1;
				if(reset){
					return {num:randomInt,frozen:false};
				}
				else if(!numObj.frozen){
					return {...numObj,num:randomInt};
				}
				return numObj;
			})
			return tempNumbers;
		});
	};

	function restartGame(){
		setIsWon(false);
		generateNewNumbers(null,true);
	}

	checkWin();

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
