/**
 * date: 2018-05-03 13:52
 * auth: XuQiang
 **/
import React, {Component} from 'react';
import PropsTypes from 'prop-types';
import {loadFengmap} from './loadFengmap'

class FMap extends Component {

	map = null;
	fengmap = window.fengmap;

	constructor(props) {
		super(props);
		this.mapView = React.createRef();
	}

	componentDidMount() {
		loadFengmap(this.props.url).then(e => this.initialMap(e));
	}

	initialMap(e) {
		if(!this.fengmap) {
			this.fengmap = e;
		}
		const {fmapID, appName, mapKey, onClick, mapOptions, defaultMapScaleLevel, defaultViewMode, textMarkers, imageMarkers, toolControl, controlOptions, offLineOptions} = this.props;
		this.map = new this.fengmap.FMMap({
			container: document.getElementById('fmap-container'), //渲染dom
			appName,           //开发者应用名称
			key: mapKey,   //开发者申请应用下web服务的key
			defaultMapScaleLevel,
			defaultViewMode,
			...offLineOptions,
			...mapOptions
		});
		//打开Fengmap服务器的地图数据和主题
		this.map.openMapById(fmapID);

		this.map.on('mapClickNode', (event) => {
			onClick(event);
		});

		this.map.on('loadComplete', () => {
			this.addTextMarker(textMarkers);
			this.addImageMarker(imageMarkers);
		});

		toolControl && new this.fengmap.toolControl(this.map, {...toolControl});
		controlOptions && new this.fengmap.controlOptions({...controlOptions});
	}

	getMap() {
		if(this.map) {
			return this.map;
		}
		return null;
	}

	setViewMode(e) {
		if(this.map) {
			if([window.fengmap.FMViewMode.MODE_2D, window.fengmap.FMViewMode.MODE_3D].some(t => t === e)) {
				this.map.viewMode = e;
			} else {
				window.console.error('prop is one of [3d, top] ');
			}
		}
	}

	setTheme(theme) {
		if(!theme) {
			window.console.error('theme name isn\'t allow empty. ');
		}
		if(this.map) {
			this.map.themeName = theme;
		}
	}

	// text marker
	addTextMarker(textMarkers) {
		const group = this.map.getFMGroup(this.map.groupIDs[0]);
		const layer = new this.fengmap.FMTextMarkerLayer();
		group.addLayer(layer);
		for(const mark of textMarkers) {
			const im = new this.fengmap.FMTextMarker({
				...mark,
				callback: () => im.alwaysShow()
			});
			layer.addMarker(im);
		}
	}

	//image marker
	addImageMarker(imageMarkers) {
		const group = this.map.getFMGroup(this.map.groupIDs[0]);
		const layer = group.getOrCreateLayer('imageMarker');
		group.addLayer(layer);
		for(const mark of imageMarkers) {
			const im = new this.fengmap.FMImageMarker({
				...mark,
				callback: () => im.alwaysShow()
			});
			layer.addMarker(im);
		}
	}


	render() {
		const {className, width, height} = this.props;

		const styles = {
			width,
			height
		};

		return (
			<div id={'fmap-container'} className={className} style={styles} ref={this.mapView}/>
		);
	}
}

FMap.propTypes = {
	fmapID: PropsTypes.string.isRequired,
	appName: PropsTypes.string,
	mapKey: PropsTypes.string.isRequired,
	url: PropsTypes.string,
	onClick: PropsTypes.func,
	className: PropsTypes.string,
	width: PropsTypes.string,
	height: PropsTypes.string,
	defaultViewMode: PropsTypes.oneOf(['3d', 'top']),
	mapOptions: PropsTypes.object,
	defaultMapScaleLevel: PropsTypes.number,
	textMarkers: PropsTypes.array,
	imageMarkers: PropsTypes.array,
	toolControl: PropsTypes.object,
	controlOptions: PropsTypes.object,
	setViewMode: PropsTypes.func,
	offLineOptions: PropsTypes.object
};

FMap.defaultProps = {
	appName: 'Feng Map for Wafer',
	onClick: () => {
	},
	url: 'https://www.fengmap.com/fmAPI/demo/FMDemoBaseMap/lib/fengmap.min.js',
	className: undefined,
	width: '100%',
	height: '100%',
	defaultViewMode: 'top',
	mapOptions: {},
	defaultMapScaleLevel: undefined,
	textMarkers: [], //{name, x, y, fontsize, }
	imageMarkers: [], //{name, x, y, url, }
	toolControl: null,
	controlOptions: null,
	setViewMode: () => {},
	offLineOptions: {}
};

export default FMap;