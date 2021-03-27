import { useState } from "react";


const HooksTest = () => {

	const [sound, setSound] = useState("CHROOO");

	const eventChangeSound = () => {
		setSound("WUFFF");
	};

	return ( 
		<div className="hook">
			<button onClick={eventChangeSound} className="btnHook">Hook example</button>
			<p>Doog likes to {sound}</p>

		</div>
	 );
}
 
export default HooksTest;