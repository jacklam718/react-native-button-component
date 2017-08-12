Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/common/InnerButton.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _reactNativeCircularProgress=require('react-native-circular-progress');
var _reactNativeSpinkit=require('react-native-spinkit');var _reactNativeSpinkit2=_interopRequireDefault(_reactNativeSpinkit);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var styles=_reactNative.StyleSheet.create({
content:{
position:'absolute',
left:0,
top:0,
right:0,
bottom:0,
flexDirection:'row',
alignItems:'center',
justifyContent:'center'},

progressContent:{
flexDirection:'column'},

spinnerContent:{
flexDirection:'column'},

progress:{
alignItems:'center'},

image:{
marginRight:12},

imageCenter:{
marginLeft:0,
marginRight:0,
marginTop:0,
marginBottom:0},

spinner:{},

text:{
letterSpacing:10,
fontSize:12,
flexDirection:'row',
color:'white'},

textInsideProgress:{
top:0,
alignItems:'center',
justifyContent:'center',
alignSelf:'center',
left:0,
right:0,
bottom:0}});



var propTypes={
imageAnim:_propTypes2.default.object,
textAnim:_propTypes2.default.object,
textStyle:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.object,_propTypes2.default.array]),
imageStyle:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.object,_propTypes2.default.array]),
progressAnim:_propTypes2.default.object,
progressStyle:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.object,_propTypes2.default.array]),
progressSize:_propTypes2.default.number,
progressWidth:_propTypes2.default.number,
progressTintColor:_propTypes2.default.string,
progressBackgroundColor:_propTypes2.default.string,
progressFill:_propTypes2.default.number,
progressText:_propTypes2.default.string,
textInsideProgress:_propTypes2.default.bool,
progress:_propTypes2.default.bool,
spinnerAnim:_propTypes2.default.object,
spinner:_propTypes2.default.bool,
spinnerSize:_propTypes2.default.number,
spinnerType:_propTypes2.default.string,
spinnerStyle:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.object,_propTypes2.default.array]),
spinnerColor:_propTypes2.default.string,
image:_propTypes2.default.any,
text:_propTypes2.default.string};


var defaultProps={
progressSize:30,
progressWidth:3,
progressTintColor:'#00e0ff',
progressBackgroundColor:'#3d5875',

spinnerSize:25,
spinnerType:'Wave',
spinnerColor:'#ffffff'};var


InnerButton=function(_Component){_inherits(InnerButton,_Component);function InnerButton(){_classCallCheck(this,InnerButton);return _possibleConstructorReturn(this,(InnerButton.__proto__||Object.getPrototypeOf(InnerButton)).apply(this,arguments));}_createClass(InnerButton,[{key:'render',value:function render()



{
var image=null;
var text=null;
var spinner=null;
var progress=null;
var contentStyle=null;

if(this.props.image&&!this.props.progress&&!this.props.spinner){
var imageStyle=this.props.text?styles.image:styles.imageCenter;
image=
_react2.default.createElement(_reactNative.Animated.Image,{
source:this.props.image,
style:[imageStyle,this.props.imageStyle,this.props.imageAnim],__source:{fileName:_jsxFileName,lineNumber:105}});


}

if(this.props.text&&!this.props.progress||!this.props.textInsideProgress){
text=
_react2.default.createElement(_reactNative.Animated.Text,{style:[styles.text,this.props.textStyle,this.props.textAnim],__source:{fileName:_jsxFileName,lineNumber:114}},
this.props.text);


}

if(this.props.progress){
contentStyle=styles.progressContent;
var progressContent=void 0;

if(this.props.textInsideProgress){
progressContent=[
this.props.progressText&&
_react2.default.createElement(_reactNative.Animated.Text,{
key:'progressText',
style:[styles.text,this.props.textStyle,this.props.textAnim],__source:{fileName:_jsxFileName,lineNumber:127}},

this.props.progressText),


this.props.text&&
_react2.default.createElement(_reactNative.Animated.Text,{
key:'text',
style:[styles.text,this.props.textStyle,this.props.textAnim],__source:{fileName:_jsxFileName,lineNumber:135}},

this.props.text)];



}

var progressAnim=this.props.textInsideProgress?
this.props.progressAnim:
this.props.imageAnim;
progress=
_react2.default.createElement(_reactNative.Animated.View,{style:[styles.progress,this.props.progressStyle,progressAnim],__source:{fileName:_jsxFileName,lineNumber:149}},
_react2.default.createElement(_reactNativeCircularProgress.AnimatedCircularProgress,{
size:this.props.progressSize,
width:this.props.progressWidth,
fill:this.props.progressFill,
tintColor:this.props.progressTintColor,
backgroundColor:this.props.progressBackgroundColor,__source:{fileName:_jsxFileName,lineNumber:150}},

progressContent));



}

if(this.props.spinner&&!this.props.progress&&!this.props.image){
contentStyle=styles.spinnerContent;
spinner=
_react2.default.createElement(_reactNative.Animated.View,{
style:[styles.spinner,this.props.spinnerStyle,this.props.imageAnim],__source:{fileName:_jsxFileName,lineNumber:166}},

_react2.default.createElement(_reactNativeSpinkit2.default,{
isVisible:true,
style:[styles.spinner,this.props.spinnerStyle],
size:this.props.spinnerSize,
type:this.props.spinnerType,
color:this.props.spinnerColor,__source:{fileName:_jsxFileName,lineNumber:169}}));



}

return(
_react2.default.createElement(_reactNative.View,{style:[styles.content,contentStyle],__source:{fileName:_jsxFileName,lineNumber:181}},
image,
progress,
spinner,
text));


}}]);return InnerButton;}(_react.Component);InnerButton.propTypes=propTypes;InnerButton.defaultProps=defaultProps;exports.default=


InnerButton;