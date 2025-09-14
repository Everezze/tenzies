import Dice from "./Dice";

export default function Game(props){
	console.log("array numbers is: ",props.numbers);
	console.log("func is:",props.toggleActive);
	console.log("isWon value: ",props.isWon);
	let diceArray = [];
	for(let i=0;i<props.numbers.length;i++){
		diceArray.push(<Dice key={i} int={props.numbers[i].num} position={i} toggleActive={props.toggleActive} />)
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
