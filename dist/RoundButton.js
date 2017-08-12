Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/RoundButton.js';exports.default=


RoundButton;var _react=require('react');var _react2=_interopRequireDefault(_react);var _ButtonComponent=require('./ButtonComponent');var _ButtonComponent2=_interopRequireDefault(_ButtonComponent);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function RoundButton(props){
var progressSize=props.height/2;

return(
_react2.default.createElement(_ButtonComponent2.default,_extends({},
props,{
shape:'round',
width:props.width,
height:props.height,
progressSize:progressSize,__source:{fileName:_jsxFileName,lineNumber:8}})));


}

RoundButton.propTypes=_extends({},
_ButtonComponent2.default.propTypes);


RoundButton.defaultProps={
width:null,
height:50};