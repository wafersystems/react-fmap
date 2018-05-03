# react-fmap
fengmap for react

[![npm](https://img.shields.io/npm/v/react-fmap.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/react-fmap)
[![NPM downloads](http://img.shields.io/npm/dm/react-fmap.svg?style=flat-plastic)](https://npmjs.org/package/react-fmap)


## Using

  * install

  `npm i react-fmap`

   * import js

   copy ./node_modules/react-fmap/js/fengmap.min.js to your public dir for html refs.

   eg: index.html

   `<script src="./node_modules/react-fmap/js/fengmap.min.js" ></script>`

   * using in react

   ```js
   import FMap from 'react-fmap';
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
    				<FMap {...mapProps}/>
    			</div>
    		);
    	}
   }
   ```

   > notice: mapKey is key of FengMap.

## Props

| Prop | default value  |  is required  | description |
|------|-----|-----|----------------------------------|
|fmapID|     | true | feng map id                     |
|appName|    | false| application name                |
|mapKey|     | true | feng map key                    |
|onClick|    | false | a callback for click map       |
|className|  | false | map mount dom's class name     |
|width|      | false | map mount dom's width          |
|height|     | false | map mount dom's height         |
|defaultViewMode|`top`|false| 3d or 2d, value of ['3d', 'top']|
|fMMapProps| | false |  new FMMap's other props       |
|textMarkers|`[]`| false | text marker eg: {x, y, name[, z, ...]}|