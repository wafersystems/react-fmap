import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FMap from './FMap';

class App extends Component {

	render() {

		const mapProps = {
			fmapID: 'wafer-beijing',
			appName:'北京威发新世纪',
			mapKey:'3e7dba2418ac46e1af5a1abf17082db2',
			height: 'calc(100vh - 254px)'
		};

		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<FMap {...mapProps}/>
			</div>
		);
	}
}

export default App;
