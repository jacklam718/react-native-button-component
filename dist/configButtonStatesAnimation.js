Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function configButtonTextAnimation(height,index){
var textAnimConfig={};
var opacity={inputRange:[],outputRange:[]};
var translateY={inputRange:[],outputRange:[]};
if(index===0){
opacity.inputRange.push(0,1);
opacity.outputRange.push(1,0);
translateY.inputRange.push(0,1);
translateY.outputRange.push(0,height-10);
}else{
opacity.inputRange.push(0,1);
opacity.outputRange.push(0,1);
translateY.inputRange.push(0,1);
translateY.outputRange.push(0-height*index,0-height*(index-1));
}
textAnimConfig.opacity=opacity;
textAnimConfig.transform=[{translateY:translateY}];

return textAnimConfig;
}

function configButtonImageAnimation(height,index){
var imageAnimConfig={};
var opacity={inputRange:[],outputRange:[]};
var translateY={inputRange:[],outputRange:[]};
if(index===0){
opacity.inputRange.push(0,1);
opacity.outputRange.push(1,0);
translateY.inputRange.push(0,1);
translateY.outputRange.push(0,(height-10)*2);
}else{
opacity.inputRange.push(0,1);
opacity.outputRange.push(0,1);
translateY.inputRange.push(0,1);
translateY.outputRange.push(0-height*2*index,0-height*2*(index-1));
}
imageAnimConfig.opacity=opacity;
imageAnimConfig.transform=[{translateY:translateY}];
return imageAnimConfig;
}

function configButtonProgressAnimation(height,index){
var progressAnimConfig={};
var opacity={inputRange:[],outputRange:[]};
var translateY={inputRange:[],outputRange:[]};
opacity.inputRange.push(0,1);
opacity.outputRange.push(0,1);
translateY.inputRange.push(0,0);
translateY.outputRange.push(0-height*2*index,0-height*2*(index-1));
progressAnimConfig.opacity=opacity;
progressAnimConfig.transform=[{translateY:translateY}];
return progressAnimConfig;
}

function configButtonStatesAnimation(buttonsStates,height){
var addedAnimtionConfigButtonStates={};
var stateNames=Object.keys(buttonsStates);
for(var i=0;i<stateNames.length;i+=1){
var stateName=stateNames[i];
var buttonState=buttonsStates[stateName];

addedAnimtionConfigButtonStates[stateName]=_extends({
textAnimConfig:configButtonTextAnimation(height,i),
imageAnimConfig:configButtonImageAnimation(height,i),
progressAnimConfig:configButtonProgressAnimation(height,i)},
buttonState);

}

return addedAnimtionConfigButtonStates;
}exports.default=

configButtonStatesAnimation;