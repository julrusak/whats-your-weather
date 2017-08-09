import React from 'react';
import { render } from 'react-dom';
import Clouds from '../svgs/Clouds';
import Drops from '../svgs/Drops';
import Flash from '../svgs/Flash';
import Sun from '../svgs/Sun';
import Snow from '../svgs/Snow';
import Wind from '../svgs/Wind';
import Haze from '../svgs/Haze';


const getSVG = function(temp){
	// fill temp to be temp code!!!
	return (temp >= 200 && temp < 300) ? <Flash /> :
		   (temp >= 300 && temp < 600) ? <Drops /> :
		   (temp >= 600 && temp < 700) ? <Snow /> :
		   (temp >= 700 && temp < 742) ? <Haze /> :
		   (temp == 800) ? <Sun /> :
		   (temp >= 801 && temp < 805) ? <Clouds /> :
		   (temp >= 952 && temp < 962) ? <Wind /> :
		   null;
}

export default class WeatherIcon extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				{ getSVG(this.props.temp) }
			</div>
		)
	}
}