# react-fmap
fengmap for react

[![npm](https://img.shields.io/npm/v/react-fmap.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/react-fmap)
[![NPM downloads](http://img.shields.io/npm/dm/react-fmap.svg?style=flat-plastic)](https://npmjs.org/package/react-fmap)


## Using

  * install

  `npm i react-fmap`

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
|url|  [dome url](https://www.fengmap.com/fmAPI/demo/FMDemoBaseMap/lib/fengmap.min.js)   | false | fengmap.min.js                     |
|fmapID|     | true | feng map id                     |
|appName|    | false| application name                |
|mapKey|     | true | feng map key                    |
|onClick|    | false | a callback for click map       |
|className|  | false | map mount dom's class name     |
|width|      | false | map mount dom's width          |
|height|     | false | map mount dom's height         |
|defaultViewMode|`top`|false| 3d or 2d, value of ['3d', 'top']|
|mapOptions| | false |  new FMMap's other props       |
|textMarkers|`[]`| false | text marker eg: {x, y, name[, z, ...]}|
|imageMarkers|`[]`| false | image marker eg: {x, y, url[, z, ...]}|
|toolControl|`null`| false | map control tool. eg: 2d or 3d tool |
|controlOptions|`null`| false | map control options, eg: position or offset |
|offLineOptions| [object](#offlineoptions) | false | off line map props |
|popMarkers| `null` | false | pop marker. props is controlOptions. |
|initialPosition| `null` | false | initial move to position. |
|loadComplete| `null` | false | map load complete function. |


#### offLineOptions

```js
	offLineOptions: {
		mapServerURL: '',
		mapThemeURL: '',
		defaultThemeName: ''
		[,
		...other props
		]
	}
```


### function

|  name  |  props  |   return  |        description   |
|------|-----|-----|----------------------------------|
| setViewMode | mode: string `['top', '3d']` | this.map |  return fengmap object   |
|setTheme|themeName: string| void | set map theme name |
|setPopMarker|options: `{}`| `popMarker` | pop mark on map. call `popMarker.close()` close pop marker |
|getSearchReq|(request, callback)| Array: FMap | search map. request is object.eg: {ID: ''}  |
|onNavigation|options: `{}`| FMap | get navigation object  |
|onMapFunction|name[, options]| null | apply map function  |

### add text marker

```js
	this.map.getSearchReq({ID: 61}, v => {
		this.map.addTextMarker([{
		x: 12958819.3,
		y: 4852556.59,
		z: 0,
		name: '3F04'
		}], v.groupID);
	});
```
### add image marker

```js
 this.map.addImageMarker([{
		x:  12958819.3,
		y: 4852556.59,
		z: 0,
		name: '3F01',
		url: '/static/media/logo.5d5d9eef.svg'
	}], v.groupID);
```

### onMapFunction
```js
	this.map.onMapFunction('moveTo', {x: 12958819.3, y: 4852556.59, groupID: 1, z: 0});
```


### fengmap.min.js

	if localize fengmap.min.js, then copy `node_modules/react-fmap/js/fengmap.min.js` to src(or can reach at a dir).

	then import this is by `script` tag in `index.html`.