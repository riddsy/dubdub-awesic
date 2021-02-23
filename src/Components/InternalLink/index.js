import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const StyledButton = styled((props) => <Link {...props} />)`
  font-size: ${(props) => `${props.fontsize}rem`};
  border-radius: ${(props) => props.borderradius};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundcolor};
  color: ${(props) => props.textcolor};
  width: ${(props) => (props.block === 'true' ? '100%' : '')};
  &:hover {
    opacity: 0.7;
    cursor: ${(props) => (props.disabled ? 'no-drop' : 'pointer')};
  }
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  text-transform: uppercase;
  white-space: nowrap;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
`;

const InternalLink = ({
  fontsize,
  borderradius,
  margin,
  padding,
  backgroundcolor,
  textcolor,
  disabled,
  block,
  children,
  to,
}) => {
  return (
    <StyledButton
      fontsize={fontsize}
      borderradius={borderradius}
      margin={margin}
      padding={padding}
      backgroundcolor={backgroundcolor}
      textcolor={textcolor}
      disabled={disabled}
      block={block}
      to={to}
    >
      {children}
    </StyledButton>
  );
};

InternalLink.defaultProps = {
  fontsize: 1,
  borderradius: '5px',
  margin: 'auto',
  padding: '0.5rem 1rem',
  backgroundcolor: 'lightgrey',
  textcolor: 'black',
  disabled: false,
  block: 'false',
};

InternalLink.propTypes = {
  fontsize: PropTypes.number,
  borderradius: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  backgroundcolor: PropTypes.string,
  textcolor: PropTypes.string,
  disabled: PropTypes.bool,
  block: PropTypes.string,
};

export default InternalLink;
