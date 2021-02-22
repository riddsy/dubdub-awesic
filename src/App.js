import styled from 'styled-components';

import Button from './Components/Button';
import Toggle from './Components/Toggle';
import Label from './Components/Label';

import Icon from './Components/Icon';

const Wrapper = styled.div`
  max-width: 1100px;
  padding: 2rem;
  margin: 2rem;
  font-family: Arial, Helvetica, sans-serif;
`;

const ItemWrapper = styled.div`
  border-bottom: 1px solid black;
  padding: 2rem;
  margin: 2rem;
  > h2 {
    text-transform: uppercase;
    font-weight: 300;
    padding-bottom: 1rem;
  }
`;

function App() {
  return (
    <Wrapper>
      <ItemWrapper>
        <h2>Icon</h2>
        <Icon
          iconType='userlist'
          size={3.7}
          iconColor={'rgb(235, 235, 235)'}
          backgroundColor={'grey'}
          margin='auto'
          borderRadius='50%'
          padding={'2rem'}
        />
      </ItemWrapper>
    </Wrapper>
  );
}

export default App;
