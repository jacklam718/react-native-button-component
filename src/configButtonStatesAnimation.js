function configButtonTextAnimation(height, index) {
  const textAnimConfig = {};
  const opacity = { inputRange: [], outputRange: [] };
  const translateY = { inputRange: [], outputRange: [] };
  if (index === 0) {
    opacity.inputRange.push(0, 1);
    opacity.outputRange.push(1, 0);
    translateY.inputRange.push(0, 1);
    translateY.outputRange.push(0, height - 10);
  } else {
    opacity.inputRange.push(0, 1);
    opacity.outputRange.push(0, 1);
    translateY.inputRange.push(0, 1);
    translateY.outputRange.push((0 - height * index), (0 - height * (index - 1)));
  }
  textAnimConfig.opacity = opacity;
  textAnimConfig.transform = [{ translateY }];

  return textAnimConfig;
}

function configButtonImageAnimation(height, index) {
  const imageAnimConfig = {};
  const opacity = { inputRange: [], outputRange: [] };
  const translateY = { inputRange: [], outputRange: [] };
  if (index === 0) {
    opacity.inputRange.push(0, 1);
    opacity.outputRange.push(1, 0);
    translateY.inputRange.push(0, 1);
    translateY.outputRange.push(0, (height - 10) * 2);
  } else {
    opacity.inputRange.push(0, 1);
    opacity.outputRange.push(0, 1);
    translateY.inputRange.push(0, 1);
    translateY.outputRange.push((0 - (height * 2) * index), (0 - (height * 2) * (index - 1)));
  }
  imageAnimConfig.opacity = opacity;
  imageAnimConfig.transform = [{ translateY }];
  return imageAnimConfig;
}

function configButtonProgressAnimation(height, index) {
  const progressAnimConfig = {};
  const opacity = { inputRange: [], outputRange: [] };
  const translateY = { inputRange: [], outputRange: [] };
  opacity.inputRange.push(0, 1);
  opacity.outputRange.push(0, 1);
  translateY.inputRange.push(0, 0);
  translateY.outputRange.push((0 - (height * 2) * index), (0 - (height * 2) * (index - 1)));
  progressAnimConfig.opacity = opacity;
  progressAnimConfig.transform = [{ translateY }];
  return progressAnimConfig;
}

function configButtonStatesAnimation(buttonsStates, height) {
  const addedAnimtionConfigButtonStates = {};
  const stateNames = Object.keys(buttonsStates);
  for (let i = 0; i < stateNames.length; i += 1) {
    const stateName = stateNames[i];
    const buttonState = buttonsStates[stateName];

    addedAnimtionConfigButtonStates[stateName] = {
      textAnimConfig: configButtonTextAnimation(height, i),
      imageAnimConfig: configButtonImageAnimation(height, i),
      progressAnimConfig: configButtonProgressAnimation(height, i),
      ...buttonState,
    };
  }

  return addedAnimtionConfigButtonStates;
}

export default configButtonStatesAnimation;
