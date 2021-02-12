import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const handleClick = btnName => {
    props.clickHandler(btnName);
  };

  return (
    <>
      <div>
        <Button name="AC" topPanel="true" clickHandler={handleClick} />
        <Button name="+/-" topPanel="true" clickHandler={handleClick} />
        <Button name="%" topPanel="true" clickHandler={handleClick} />
        <Button name="÷" rightPanel="true" clickHandler={handleClick} />
      </div>
      <div>
        <Button name="7" clickHandler={handleClick} />
        <Button name="8" clickHandler={handleClick} />
        <Button name="9" clickHandler={handleClick} />
        <Button name="×" clickHandler={handleClick} rightPanel="true" />
      </div>
      <div>
        <Button name="4" clickHandler={handleClick} />
        <Button name="5" clickHandler={handleClick} />
        <Button name="6" clickHandler={handleClick} />
        <Button name="−" clickHandler={handleClick} rightPanel="true" />
      </div>
      <div>
        <Button name="1" clickHandler={handleClick} />
        <Button name="2" clickHandler={handleClick} />
        <Button name="3" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} rightPanel="true" />
      </div>
      <div>
        <Button name="0" clickHandler={handleClick} zeroButton="true" />
        <Button name="." clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} rightPanel="true" />
      </div>
    </>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
