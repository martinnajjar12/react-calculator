import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <>
    <div>
      <Button name="AC" topPanel="true" />
      <Button name="+/-" topPanel="true" />
      <Button name="%" topPanel="true" />
      <Button name="÷" rightPanel="true" />
    </div>
    <div>
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="×" rightPanel="true" />
    </div>
    <div>
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="−" rightPanel="true" />
    </div>
    <div>
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" rightPanel="true" />
    </div>
    <div>
      <Button name="0" zeroButton="true" />
      <Button name="." />
      <Button name="=" rightPanel="true" />
    </div>
  </>
);

export default ButtonPanel;
