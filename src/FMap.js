/**
 * date: 2018-05-03 13:52
 * auth: XuQiang
 **/
import React, {Component} from 'react';
import PropsTypes from 'prop-types';

class FMap extends Component {

	constructor(props) {
		super(props);
		this.mapView = React.createRef();
	}

	map = null;
	fengmap = window.fengmap;

	componentDidMount() {
		const {fmapID, appName, mapKey, onClick, fMMapProps, defaultMapScaleLevel, defaultViewMode, textMarkers, toolControl, controlOptions} = this.props;
		this.map = new this.fengmap.FMMap({
			container: document.getElementById('fmap-container'), //渲染dom
			appName,           //开发者应用名称
			key: mapKey,   //开发者申请应用下web服务的key
			defaultMapScaleLevel,
			defaultViewMode,
			...fMMapProps
		});
		//打开Fengmap服务器的地图数据和主题
		this.map.openMapById(fmapID);

		this.map.on('mapClickNode', (event) => {
			onClick(event);
		});

		this.map.on('loadComplete', () => {
			this.addTextMarker(textMarkers);
		});

		new this.fengmap.toolControl(this.map, {...toolControl});
		new this.fengmap.controlOptions({...controlOptions});
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

	addTextMarker(textMarkers) {
		const group = this.map.getFMGroup(this.map.groupIDs[0]);
		const layer = new this.fengmap.FMTextMarkerLayer();
		group.addLayer(layer);
		for(const mark of textMarkers) {
			const im = new this.fengmap.FMTextMarker({
				...mark,
				x: mark.x,
				y: mark.y,
				name: mark.name || '',
				fontsize: mark.fontSize || 12, //字体大小
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
	onClick: PropsTypes.func,
	className: PropsTypes.string,
	width: PropsTypes.string,
	height: PropsTypes.string,
	defaultViewMode: PropsTypes.oneOf(['3d', 'top']),
	fMMapProps: PropsTypes.object,
	defaultMapScaleLevel: PropsTypes.number,
	textMarkers: PropsTypes.array,
	toolControl: PropsTypes.object,
	controlOptions: PropsTypes.object,
	setViewMode: PropsTypes.func
};

FMap.defaultProps = {
	appName: 'Feng Map for Wafer',
	onClick: () => {
	},
	className: undefined,
	width: '100%',
	height: '100%',
	defaultViewMode: window.fengmap.FMViewMode.MODE_2D,
	fMMapProps: {},
	defaultMapScaleLevel: undefined,
	textMarkers: [], //{name, x, y, fontSize, }
	toolControl: {},
	controlOptions: {},
	setViewMode: () => {}
};

export default FMap;