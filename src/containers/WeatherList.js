import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from "../components/chart";
import GoogleMap from "../components/GoogleMap";

class WealtherList extends Component {
	renderWeather(cityData) {
	    const name = cityData.city.name;
	    const temps = cityData.list.map(weather => weather.main.temp);
	    const pressures = cityData.list.map(weather => weather.main.pressure);
	    const humidities = cityData.list.map(weather => weather.main.humidity);
	    const { lon, lat } = cityData.city.coord;

		return (
	      <tr key={cityData.city.id}>
	        <td><GoogleMap lon={lon} lat={lat} /></td>
            <td><Chart data={temps} color="orange" units="K" /></td>
            <td><Chart data={pressures} color="green" units="hPa" /></td>
            <td><Chart data={humidities} color="black" units="%" /></td>
	      </tr>
	    );
	}


	render() {
		return (
		 <table className="table table-hover">
	        <thead className="thead-light">
	          <tr>
	            <th>City</th>
	            <th>Temperature (K)</th>
	            <th>Pressure (hPa)</th>
	            <th>Humidity (%)</th>
	          </tr>
	        </thead>
	        <tbody>
	        	{this.props.weather.map(this.renderWeather)}
	        </tbody>
	      </table>
		)
	}
}

const mapStateToProps = ({weather}) => {
	return { weather }; // === {weather: weather}
}

export default connect(mapStateToProps)(WealtherList);