import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${(props) =>
    props.background ? `rgba(${props.background}, 1)` : 'red'};
`;

const Toggle = ({ theme }) => {
  return (
    <Wrapper background={!!theme ? theme.colors.primary[0] : '55,155,51'}>
      <button>on</button>
      <button>off</button>
    </Wrapper>
  );
};

export default Toggle;
