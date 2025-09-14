export default function Dice(props){
	return (
		<span className={`dice ${props.frozen?"active":""}`} onClick={props.toggleActive} data-id={props.position}>{props.int}</span>
	)
}
