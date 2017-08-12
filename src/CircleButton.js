import React from 'react';
import PropTypes from 'prop-types';
import ButtonComponent from './ButtonComponent';

export default function CircleButton(props) {
  const buttonSize = props.size;
  const progressSize = buttonSize;
  const textInsideProgress = props.states
    ? props.states[props.buttonState].progress
    : null;

  return (
    <ButtonComponent
      {...props}
      shape="circle"
      width={buttonSize}
      height={buttonSize}
      progressSize={progressSize}
      textInsideProgress={textInsideProgress}
    />
  );
}

CircleButton.propTypes = {
  ...ButtonComponent.propTypes,
  size: PropTypes.number,
};

CircleButton.defaultProps = {
  size: 100,
  progressBackgroundColor: '#F0F0F0',
  progress: true,
  progressWidth: 3,
};
