Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/RectangleButton.js';exports.default=


RectangleButton;var _react=require('react');var _react2=_interopRequireDefault(_react);var _ButtonComponent=require('./ButtonComponent');var _ButtonComponent2=_interopRequireDefault(_ButtonComponent);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function RectangleButton(props){
var progressSize=props.height/2;

return(
_react2.default.createElement(_ButtonComponent2.default,_extends({},
props,{
shape:'rectangle',
width:props.width,
height:props.height,
progressSize:progressSize,__source:{fileName:_jsxFileName,lineNumber:8}})));


}

RectangleButton.propTypes=_extends({},
_ButtonComponent2.default.propTypes);


RectangleButton.defaultProps={
width:null,
height:50};