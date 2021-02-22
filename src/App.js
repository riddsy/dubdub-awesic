import styled from 'styled-components';

import Icon from './Components/Icon';
import Button from './Components/Button';

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
  > h2 {
    text-transform: uppercase;
    font-weight: 300;
    padding-bottom: 0.5rem;
  }
`;

const Groupings = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  align-items: flex-start;
`;

function App() {
  return (
    <Wrapper>
      <ItemWrapper>
        <h2>Icon</h2>
        <Groupings>
          <div>
            <h3>Standard</h3>
            <Icon iconType='userlist' />
          </div>
          <div>
            <h3>Styled</h3>
            <Icon
              iconType='userlist'
              size={3.7}
              iconColor={'rgb(235, 235, 235)'}
              backgroundColor={'darkblue'}
              margin='auto'
              borderRadius='50%'
              padding={'2rem'}
            />
          </div>
        </Groupings>
      </ItemWrapper>
      <ItemWrapper>
        <h2>Button</h2>
        <Groupings>
          <div>
            <h3>Standard</h3>
            <Button>Button</Button>
          </div>
          <div>
            <h3>Styled</h3>
            <Button>Button</Button>
          </div>
        </Groupings>
      </ItemWrapper>
    </Wrapper>
  );
}

export default App;
