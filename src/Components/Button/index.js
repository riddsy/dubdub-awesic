import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const StyledButton = styled.button`
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}rem` : '1rem')};
  border-radius: ${(props) =>
    props.borderRadius ? `${props.borderRadius}` : '5px'};
  margin: ${(props) => (props.margin ? props.margin : 'auto')};
  padding: ${(props) => (props.padding ? props.padding : '0.5rem 1rem')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'lightgrey'};
  color: ${(props) => (props.textColor ? props.textColor : 'black')};
  width: ${(props) => (props.block ? '100%' : '')};
  &:hover {
    opacity: 0.7;
    cursor: ${(props) => (props.disabled ? 'no-drop' : 'pointer')};
  }
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  text-transform: capitalize;
  white-space: nowrap;
`;

const Button = ({
  fontSize,
  borderRadius,
  margin,
  padding,
  backgroundColor,
  textColor,
  disabled,
  block,
}) => {
  return (
    <Button
      fontSize={fontSize}
      borderRadius={borderRadius}
      margin={margin}
      padding={padding}
      backgroundColor={backgroundColor}
      textColor={textColor}
      disabled={disabled}
      block={block}
    />
  );
};

Button.propTypes = {
  fontSize: PropTypes.number,
  borderRadius: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
};

export default Button;
