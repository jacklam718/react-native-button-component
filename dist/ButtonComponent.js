Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/ButtonComponent.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _reactNativeLinearGradient=require('react-native-linear-gradient');var _reactNativeLinearGradient2=_interopRequireDefault(_reactNativeLinearGradient);
var _Button=require('./common/Button');var _Button2=_interopRequireDefault(_Button);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var propTypes=_extends({},
_Button2.default.propTypes,{
width:_propTypes2.default.number,
height:_propTypes2.default.number,
type:_propTypes2.default.string,
shape:_propTypes2.default.string,
gradientStart:_propTypes2.default.object,
gradientEnd:_propTypes2.default.object,
backgroundColors:_propTypes2.default.array,
buttonStyle:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.object,_propTypes2.default.array]),
style:_propTypes2.default.oneOfType([_propTypes2.default.number,_propTypes2.default.object,_propTypes2.default.array]),
progressSize:_propTypes2.default.number,
onPress:_propTypes2.default.func});


var defaultProps={
type:'primary',
shape:'round',
backgroundColors:['#4DC7A4','#66D37A'],
gradientStart:{x:0.5,y:1},
gradientEnd:{x:1,y:1},
width:null,
height:50};var


ButtonComponent=function(_Component){_inherits(ButtonComponent,_Component);function ButtonComponent(){_classCallCheck(this,ButtonComponent);return _possibleConstructorReturn(this,(ButtonComponent.__proto__||Object.getPrototypeOf(ButtonComponent)).apply(this,arguments));}_createClass(ButtonComponent,[{key:'shouldComponentUpdate',value:function shouldComponentUpdate(



nextProps){
if(this.props.image!==nextProps.image)return true;
if(this.props.text!==nextProps.text)return true;
if(this.props.states&&this.props.buttonState!==nextProps.buttonState)return true;
if(this.props.states&&this.props.states[this.props.buttonState].progressFill)return true;
return false;
}},{key:'renderButton',value:function renderButton(_ref)

{var _ref$textStyle=_ref.textStyle,textStyle=_ref$textStyle===undefined?styles.text:_ref$textStyle,_ref$imageStyle=_ref.imageStyle,imageStyle=_ref$imageStyle===undefined?styles.image:_ref$imageStyle;
var button=void 0;

if(this.props.states){
var addedAnimtionConfigButtonStates=configButtonStatesAnimation(
this.props.states,
this.props.height);

button=
_react2.default.createElement(_Button2.default,{
states:addedAnimtionConfigButtonStates,
buttonState:this.props.buttonState,
textStyle:this.props.textStyle||textStyle,
imageStyle:this.props.imageStyle||imageStyle,
imageAnimConfig:this.props.imageAnimConfig,
textAnimConfig:this.props.textAnimConfig,
spinnerAnimConfig:this.props.spinnerAnimConfig,
spinner:this.props.spinner,
spinnerSize:this.props.spinnerSize,
spinnerType:this.props.spinnerType,
spinnerStyle:this.props.spinnerStyle,
spinnerColor:this.props.spinnerColor,
progressAnimConfig:this.props.progressAnimConfig,
progressSize:this.props.progressSize,
progressWidth:this.props.progressWidth,
progressTintColor:this.props.progressTintColor,
progressBackgroundColor:this.props.progressBackgroundColor,
progressStyle:this.props.progressStyle,
textInsideProgress:this.props.textInsideProgress,__source:{fileName:_jsxFileName,lineNumber:53}});


}else{
button=
_react2.default.createElement(_Button2.default,{
textStyle:this.props.textStyle||textStyle,
imageStyle:this.props.imageStyle||imageStyle,
text:this.props.text,
image:this.props.image,__source:{fileName:_jsxFileName,lineNumber:77}});


}

return button;
}},{key:'render',value:function render()

{
var content=void 0;
var shape=void 0;

var currentButtonState=this.props.buttonState&&this.props.states?
this.props.states[this.props.buttonState]:
this.props;
var gradientStart=currentButtonState.gradientStart?
currentButtonState.gradientStart:
this.props.gradientStart;
var gradientEnd=currentButtonState.gradientEnd?
currentButtonState.gradientEnd:
this.props.gradientEnd;
var backgroundColors=currentButtonState.backgroundColors||this.props.backgroundColors;
var type=currentButtonState.type?currentButtonState.type:this.props.type;

var buttonHeight=currentButtonState.height?currentButtonState.height:this.props.height;
var buttonWidth=currentButtonState.width?currentButtonState.width:this.props.width;

if(this.props.shape==='round'||this.props.shape==='circle'){
shape={
borderRadius:buttonHeight/2};

}

if(type==='primary'){
content=
_react2.default.createElement(_reactNativeLinearGradient2.default,{
start:gradientStart,
end:gradientEnd,
colors:backgroundColors,
collapsable:false,
style:[styles.button,shape,currentButtonState.buttonStyle],__source:{fileName:_jsxFileName,lineNumber:116}},

this.renderButton({textStyle:styles.text}));


}else{
var border=type==='border'&&styles.border;
content=
_react2.default.createElement(_reactNative.View,{style:[styles.button,border,shape,currentButtonState.buttonStyle],__source:{fileName:_jsxFileName,lineNumber:129}},
this.renderButton({textStyle:styles.secondaryText}));


}

return(
_react2.default.createElement(_reactNative.TouchableOpacity,{
accessibilityTraits:'button',
onPress:currentButtonState.onPress,
activeOpacity:0.9,
style:[styles.container,{width:buttonWidth,height:buttonHeight},this.props.style],__source:{fileName:_jsxFileName,lineNumber:136}},

content));


}}]);return ButtonComponent;}(_react.Component);ButtonComponent.propTypes=propTypes;ButtonComponent.defaultProps=defaultProps;


function configButtonStatesAnimation(buttonsStates,height){
var addedAnimtionConfigButtonStates={};
var stateNames=Object.keys(buttonsStates);
for(var i=0;i<stateNames.length;i++){
var stateName=stateNames[i];
var buttonState=buttonsStates[stateName];
var textAnimConfig={};
var imageAnimConfig={};
var progressAnimConfig={};


{
var opacity={inputRange:[],outputRange:[]};
var translateY={inputRange:[],outputRange:[]};
if(i===0){
opacity.inputRange.push(0,1);
opacity.outputRange.push(1,0);
translateY.inputRange.push(0,1);
translateY.outputRange.push(0,height-10);
}else{
opacity.inputRange.push(0,1);
opacity.outputRange.push(0,1);
translateY.inputRange.push(0,1);
translateY.outputRange.push(0-height*i,0-height*(i-1));
}
textAnimConfig.opacity=opacity;
textAnimConfig.transform=[{translateY:translateY}];
}


{
var _opacity={inputRange:[],outputRange:[]};
var _translateY={inputRange:[],outputRange:[]};
if(i===0){
_opacity.inputRange.push(0,1);
_opacity.outputRange.push(1,0);
_translateY.inputRange.push(0,1);
_translateY.outputRange.push(0,(height-10)*2);
}else{
_opacity.inputRange.push(0,1);
_opacity.outputRange.push(0,1);
_translateY.inputRange.push(0,1);
_translateY.outputRange.push(0-height*2*i,0-height*2*(i-1));
}
imageAnimConfig.opacity=_opacity;
imageAnimConfig.transform=[{translateY:_translateY}];
}


{
var _opacity2={inputRange:[],outputRange:[]};
var _translateY2={inputRange:[],outputRange:[]};
_opacity2.inputRange.push(0,1);
_opacity2.outputRange.push(0,1);
_translateY2.inputRange.push(0,0);
_translateY2.outputRange.push(0-height*2*i,0-height*2*(i-1));
progressAnimConfig.opacity=_opacity2;
progressAnimConfig.transform=[{translateY:_translateY2}];
}

addedAnimtionConfigButtonStates[stateName]=_extends({
textAnimConfig:textAnimConfig,
imageAnimConfig:imageAnimConfig,
progressAnimConfig:progressAnimConfig},
buttonState);

}

return addedAnimtionConfigButtonStates;
}

var styles=_reactNative.StyleSheet.create({
container:{
flexDirection:'row',
overflow:'hidden'},

button:{
flex:1,
backgroundColor:'transparent'},


border:{
borderWidth:1,
borderColor:'#7F91A7'},

content:{
position:'absolute',
left:0,
top:0,
right:0,
bottom:0,
flexDirection:'row',
alignItems:'center',
justifyContent:'center'},

image:{
marginRight:12},

text:{
letterSpacing:1,
fontSize:12,
color:'white'},

secondaryText:{
letterSpacing:1,
fontSize:12,
color:'#7F91A7'}});exports.default=



ButtonComponent;