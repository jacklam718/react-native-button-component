Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/common/Button.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');
var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);
var _InnerButton=require('./InnerButton');var _InnerButton2=_interopRequireDefault(_InnerButton);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var propTypes=_extends({},
_InnerButton2.default.propTypes,{
states:_propTypes2.default.object,
buttonState:_propTypes2.default.string});var


Button=function(_Component){_inherits(Button,_Component);


function Button(props){_classCallCheck(this,Button);var _this=_possibleConstructorReturn(this,(Button.__proto__||Object.getPrototypeOf(Button)).call(this,
props));
var initValue=props.states?Object.keys(props.states).indexOf(props.buttonState):0;
_this.state={
animated:new _reactNative.Animated.Value(initValue)};return _this;

}_createClass(Button,[{key:'componentWillReceiveProps',value:function componentWillReceiveProps(

nextProps){
if(this.props.states&&this.props.buttonState!==nextProps.buttonState){
var toValue=Object.keys(this.props.states).indexOf(nextProps.buttonState);
_reactNative.Animated.spring(this.state.animated,{toValue:toValue}).start();
}
}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(

nextProps){var
states=nextProps.states,buttonState=nextProps.buttonState;
if(states){
return!!states[buttonState].progress;
}
return true;
}},{key:'createAnimation',value:function createAnimation(_ref)

{var _this2=this;var opacity=_ref.opacity,transform=_ref.transform;
var animation={};

if(opacity){
animation.opacity=this.state.animated.interpolate(opacity);
}
if(transform){
animation.transform=_lodash2.default.map(transform,function(directives){
var interpolates={};
_lodash2.default.forEach(directives,function(directive,directiveName){
interpolates[directiveName]=_this2.state.animated.interpolate(directive);
});
return interpolates;
});
}

return animation;
}},{key:'renderContent',value:function renderContent()

{var _this3=this;
var content=void 0;

if(this.props.states){
content=_lodash2.default.map(this.props.states,function(buttonState,buttonStateName){var
imageAnimConfig=buttonState.imageAnimConfig,textAnimConfig=buttonState.textAnimConfig,progressAnimConfig=buttonState.progressAnimConfig;
var imageAnim=imageAnimConfig?_this3.createAnimation(imageAnimConfig):null;
var textAnim=textAnimConfig?_this3.createAnimation(textAnimConfig):null;
var progressAnim=progressAnimConfig?_this3.createAnimation(progressAnimConfig):null;

return(
_react2.default.createElement(_InnerButton2.default,_extends({
key:buttonStateName,
imageAnim:imageAnim,
progressAnim:progressAnim,
textAnim:textAnim},
_this3.props,
buttonState,{__source:{fileName:_jsxFileName,lineNumber:69}})));


});
}else{

content=
_react2.default.createElement(_InnerButton2.default,_extends({},this.props,{__source:{fileName:_jsxFileName,lineNumber:82}}));

}

return content;
}},{key:'render',value:function render()

{
return(
_react2.default.createElement(_reactNative.View,{style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:91}},
this.renderContent()));


}}]);return Button;}(_react.Component);Button.propTypes=propTypes;exports.default=


Button;