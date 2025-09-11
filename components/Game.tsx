import Dice from "./Dice";

export default function Game(props){
	let diceArray = [];
	let numberToInsert = null;
	for(let i=0;i<10;i++){
		if(props.numbers === null){
			numberToInsert = Math.floor(Math.random() * 6) + 1;
		}else{
			numberToInsert = props.numbers[i];
		}
		diceArray.push(<Dice key={i} int={numberToInsert} />)
	}
	return (
		<article>
			{diceArray}
		</article>
	)
}
