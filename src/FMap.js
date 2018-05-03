/**
 * date: 2018-05-03 13:52
 * auth: XuQiang
 **/
import React, {PureComponent} from 'react';
import PropsTypes from 'prop-types';

class FMap extends PureComponent {

	componentDidMount() {
		const {fmapID, appName, mapKey, onClick} = this.props;
		const map = new window.fengmap.FMMap({
			container: document.getElementById('fmap-container'), //渲染dom
			appName,           //开发者应用名称
			key: mapKey   //开发者申请应用下web服务的key
		});
		//打开Fengmap服务器的地图数据和主题
		map.openMapById(fmapID);

		map.on('mapClickNode', (event) => {
			onClick(event);
		});
	}

	render() {
		const {className, width, height} = this.props;

		const styles = {
			width,
			height
		};

		return (
			<div id={'fmap-container'} className={className} style={styles}/>
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
	height: PropsTypes.string
};

FMap.defaultProps = {
	appName: 'Feng Map for Wafer',
	onClick: () => {
	},
	className: undefined,
	width: '100%',
	height: '100%'
};

export default FMap;