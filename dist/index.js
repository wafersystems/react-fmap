!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react"),require("prop-types"));else if("function"==typeof define&&define.amd)define(["react","prop-types"],t);else{var n="object"==typeof exports?t(require("react"),require("prop-types")):t(e.React,e["prop-types"]);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),f=r(l),s=n(2),c=r(s),d=n(3),m=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.map=null,n.fengmap=window.fengmap,n.mapView=null,n}return i(t,e),u(t,[{key:"componentDidMount",value:function(){var e=this;(0,d.loadFengmap)(this.props.url).then(function(t){return e.initialMap(t)})}},{key:"initialMap",value:function(e){var t=this;this.fengmap||(this.fengmap=e,window.fengmap=null);var n=this.props,r=n.fmapID,a=n.appName,o=n.mapKey,i=n.onClick,u=n.mapOptions,l=n.defaultMapScaleLevel,f=n.defaultViewMode,s=n.textMarkers,c=n.imageMarkers,d=n.toolControl,m=n.controlOptions,h=n.offLineOptions;this.map=new this.fengmap.FMMap(p({container:document.getElementById("fmap-container"),appName:a,key:o,defaultMapScaleLevel:l,defaultViewMode:f},h,u)),this.map.openMapById(r),this.map.on("mapClickNode",function(e){i(e)}),this.map.on("loadComplete",function(){t.addTextMarker(s),t.addImageMarker(c)}),d&&new this.fengmap.toolControl(this.map,p({},d)),m&&new this.fengmap.controlOptions(p({},m))}},{key:"setViewMode",value:function(e){this.map&&([this.fengmap.FMViewMode.MODE_2D,this.fengmap.FMViewMode.MODE_3D].some(function(t){return t===e})?this.map.viewMode=e:window.console.error("prop is one of [3d, top] "))}},{key:"setTheme",value:function(e){e||window.console.error("theme name isn't allow empty. "),this.map&&(this.map.themeName=e)}},{key:"addTextMarker",value:function(e,t){var n=this,r=this.map.getFMGroup(t||this.map.groupIDs[0]),a=r.getOrCreateLayer("textMarker");r.addLayer(a);var o=!0,i=!1,u=void 0;try{for(var l,f=e[Symbol.iterator]();!(o=(l=f.next()).done);o=!0)!function(){var e=l.value,t=new n.fengmap.FMTextMarker(p({},e,{callback:function(){return t.alwaysShow()}}));a.addMarker(t)}()}catch(e){i=!0,u=e}finally{try{!o&&f.return&&f.return()}finally{if(i)throw u}}}},{key:"addImageMarker",value:function(e,t){var n=this,r=this.map.getFMGroup(t||this.map.groupIDs[0]),a=r.getOrCreateLayer("imageMarker");r.addLayer(a);var o=!0,i=!1,u=void 0;try{for(var l,f=e[Symbol.iterator]();!(o=(l=f.next()).done);o=!0)!function(){var e=l.value,t=new n.fengmap.FMImageMarker(p({},e,{callback:function(){return t.alwaysShow()}}));a.addMarker(t)}()}catch(e){i=!0,u=e}finally{try{!o&&f.return&&f.return()}finally{if(i)throw u}}}},{key:"setPopMarker",value:function(e){if(!e)throw new Error("controlOptions must be set.");return new this.fengmap.FMPopInfoWindow(this.map,new this.fengmap.controlOptions(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.width,a=t.height,o=t.popMarkers,i={width:r,height:a};if(o&&o instanceof Array){var p=!0,u=!1,l=void 0;try{for(var s,c=o[Symbol.iterator]();!(p=(s=c.next()).done);p=!0){var d=s.value;this.setPopMarker(d)}}catch(e){u=!0,l=e}finally{try{!p&&c.return&&c.return()}finally{if(u)throw l}}}return f.default.createElement("div",{id:"fmap-container",className:n,style:i,ref:function(t){return e.mapView=t}})}},{key:"getSearchReq",value:function(e,t){this.fengmap.MapUtil.search(this.map,"all",p({nodeType:this.fengmap.FMNodeType.MODEL},e),t)}},{key:"onNavigation",value:function(e){return new this.fengmap.FMNavigation(p({map:this.map},e))}}]),t}(l.Component);m.propTypes={fmapID:c.default.string.isRequired,appName:c.default.string,mapKey:c.default.string.isRequired,url:c.default.string,onClick:c.default.func,className:c.default.string,width:c.default.string,height:c.default.string,defaultViewMode:c.default.oneOf(["3d","top"]),mapOptions:c.default.object,defaultMapScaleLevel:c.default.number,textMarkers:c.default.array,imageMarkers:c.default.array,popMarkers:c.default.array,toolControl:c.default.object,controlOptions:c.default.object,setViewMode:c.default.func,offLineOptions:c.default.object},m.defaultProps={appName:"Feng Map for Wafer",onClick:function(){},url:"https://www.fengmap.com/fmAPI/demo/FMDemoBaseMap/lib/fengmap.min.js",className:void 0,width:"100%",height:"100%",defaultViewMode:"top",mapOptions:{},defaultMapScaleLevel:void 0,textMarkers:[],imageMarkers:[],popMarkers:null,toolControl:null,controlOptions:null,setViewMode:function(){},offLineOptions:{}},t.default=m},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.loadFengmap=function(e){return new Promise(function(t){var n=document.getElementsByTagName("head").item(0),r=document.createElement("script");r.src=e,r.defer=!0,n.appendChild(r);var a=setInterval(function(){window.fengmap&&(a&&(window.clearInterval(a),a=0),t(window.fengmap))},100)})}}])});