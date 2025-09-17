import Dice from "./Dice";

export default function Game(props){
	let diceArray = [];
	for(let i=0;i<props.numbers.length;i++){
		diceArray.push(
			<Dice key={i} 
			int={props.numbers[i].num}
			position={i}
			toggleActive={props.toggleActive} 
			frozen={props.numbers[i].frozen} />
		)
	};

	return (
		<article>
			<div>
				{diceArray}
			</div>
			<button onClick={props.btnAction}>
				{props.isWon ? "Replay":"Roll"}
			</button>
		</article>
	)
}
