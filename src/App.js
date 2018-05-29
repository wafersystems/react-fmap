import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FMap from './FMap';

class App extends Component {

	constructor() {
		super(...arguments);
		this.state = {
			showMap: true,
			 stations : [
				// {
				// 	x: 12958821.565,
				// 	y: 4852547.234999999,
				// 	z: 0,
				// 	name: '3F01'
				// },
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
			],
			popMarker: []
		};
	}

	render() {

		const mapProps = {
			fmapID: 'wafer-beijing',
			appName: '北京威发新世纪',
			mapKey: '3e7dba2418ac46e1af5a1abf17082db2',
			height: 'calc(100vh - 254px)',
			defaultViewMode: 'top',
			url: './fengmap.min.js'
		};
		const images = [
			{
				x: 12958821.565,
				y: 4852547.234999999,
				z: 0,
				name: '3F01',
				url: '/static/media/logo.5d5d9eef.svg'
			}
		];

		const initialPosition = {x: 12958819.3, y: 4852556.59, z: 0};

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
						this.setState({showMap: !this.state.showMap});
					}}>map show or hidden</button>
					<button onClick={() => {
						this.map.setViewMode('3d')
					}}>test view model</button>
					<button onClick={() => {
						this.map.getSearchReq({ID: 61}, v => {
							console.log(v)
							// this.map.addTextMarker([{
							// 	x: 12958819.3,
							// 	y: 4852556.59,
							// 	z: 0,
							// 	name: '3F04'
							// }], v.groupID);
							this.map.addImageMarker([{
								x:  12958819.3,
								y: 4852556.59,
								z: 0,
								name: '3F01',
								url: '/static/media/logo.5d5d9eef.svg'
							}], v.groupID);
						});
					}}>
						search
					</button>
					<button onClick={() => {
						const map = this.map.onNavigation({});
						console.log(map);
					}}>
						navigation
					</button>
					<button onClick={() => {
						this.map.onMapFunction('moveTo', {x: 12958819.3, y: 4852556.59, groupID: 1, z: 0});
					}}>
						function call back
					</button>
					<button onClick={() => {
						this.setState({stations: this.state.stations.concat({x:  12958819.3,
								y: 4852556.59, name: '3F05'})})
					}}>
						add text marker
					</button>
					<button onClick={() => {
						this.setState({stations: []})}}>
						remove text marker
					</button>
				</p>

				{this.state.showMap && <FMap {...mapProps} imageMarkers={images} loadComplete={() => {
					this.test1();
					this.test2();
				}} initialPosition={initialPosition} toolControl={{groupsButtonNeeded: true}} textMarkers={this.state.stations} onClick={e => {
					console.log(e)
					const station = {mapCoord: {
							//设置弹框的x轴
							x: e.x,
							//设置弹框的y轴
							y: e.y,
							//设置弹框位于的楼层
							groupID: e.groupID
						},
						//设置弹框的宽度
						width: 200,
						//设置弹框的高度
						height: 100,
						marginTop: 10,
						//设置弹框的内容
						content: '这是一个信息框'};
					this.map.setPopMarker(station);
				}} ref={r => this.map = r} />}
			</div>
		);
	}

	test1() {
		console.log('test1');
	}
	test2() {
		console.log('test2');
	}
}

export default App;
