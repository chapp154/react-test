const ClickEvent = () => {

	const eventClick = (e) => {
		console.log(e);
	}

	return ( 
		<button onClick={eventClick} className="btnEvent">Click me</button>
	 );
}
 
export default ClickEvent;