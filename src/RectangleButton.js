import React from 'react';
import ButtonComponent from './ButtonComponent';

export default function RectangleButton(props) {
  const progressSize = props.height / 2;

  return (
    <ButtonComponent
      {...props}
      shape="rectangle"
      width={props.width}
      height={props.height}
      progressSize={progressSize}
    />
  );
}

RectangleButton.propTypes = {
  ...ButtonComponent.propTypes,
};

RectangleButton.defaultProps = {
  width: null,
  height: 50,
};
