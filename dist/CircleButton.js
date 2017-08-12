Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/CircleButton.js';exports.default=



CircleButton;var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _ButtonComponent=require('./ButtonComponent');var _ButtonComponent2=_interopRequireDefault(_ButtonComponent);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function CircleButton(props){
var buttonSize=props.size;
var progressSize=buttonSize;
var textInsideProgress=props.states?
props.states[props.buttonState].progress:
null;

return(
_react2.default.createElement(_ButtonComponent2.default,_extends({},
props,{
shape:'circle',
width:buttonSize,
height:buttonSize,
progressSize:progressSize,
textInsideProgress:textInsideProgress,__source:{fileName:_jsxFileName,lineNumber:13}})));


}

CircleButton.propTypes=_extends({},
_ButtonComponent2.default.propTypes,{
size:_propTypes2.default.number});


CircleButton.defaultProps={
size:100,
progressBackgroundColor:'#F0F0F0',
progress:true,
progressWidth:3};