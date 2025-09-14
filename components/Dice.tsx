export default function Dice(props){
	return (
		<span className="dice" onClick={props.toggleActive} data-id={props.position}>{props.int}</span>
	)
}
