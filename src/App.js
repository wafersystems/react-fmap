import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FMap from './FMap';

class App extends Component {

	render() {

		const mapProps = {
			fmapID: 'wafer-beijing',
			appName: '北京威发新世纪',
			mapKey: '3e7dba2418ac46e1af5a1abf17082db2',
			height: 'calc(100vh - 254px)',
			defaultViewMode: 'top'
		};

		const stations = [
			{
				x: 12958821.565,
				y: 4852547.234999999,
				z: 0,
				name: '3F01'
			},
			{
				id: 123,
				stationId: 111,
				x: 12958815.715,
				y: 4852542.055,
				z: 0,
				name: '3F02'
			},
			{
				x: 12958819.295,
				y: 4852550.31,
				z: 0,
				name: '3F03'
			}
		];

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<p className="App-intro">
					<button onClick={() => {
						this.map.setViewMode('3d')
					}}>test view model</button>
				</p>

				<FMap {...mapProps} toolControl={{groupsButtonNeeded: true}} textMarkers={stations} onClick={e => {
					if(this.map) {
						console.log(this.map);
					}
				}} ref={r => this.map = r}/>
			</div>
		);
	}
}

export default App;
