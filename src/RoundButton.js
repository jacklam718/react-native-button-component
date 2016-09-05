import React from 'react';
import ButtonComponent from './ButtonComponent';

export default function RoundButton(props) {
  const progressSize = props.height / 2;

  return (
    <ButtonComponent
      {...props}
      shape="round"
      width={props.width}
      height={props.height}
      progressSize={progressSize}
    />
  );
}

RoundButton.propTypes = {
  ...ButtonComponent.propTypes,
};

RoundButton.defaultProps = {
  width: null,
  height: 50,
};
