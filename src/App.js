import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Icon from './Components/Icon';
import Button from './Components/Button';
import InternalLink from './Components/InternalLink';
import ExternalLink from './Components/ExternalLink';

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
    <Router>
      <Switch>
        <Wrapper>
          <ItemWrapper>
            <h2>Icon</h2>
            <Groupings>
              <div>
                <h3>Standard</h3>
                <Icon icontype='userlist' />
              </div>
              <div>
                <h3>Styled</h3>
                <Icon
                  icontype='userlist'
                  size={3.7}
                  iconcolor='rgb(235, 235, 235)'
                  backgroundcolor='darkblue'
                  margin='auto'
                  borderradius='50%'
                  padding='2rem'
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
                <Button
                  fontsize={3.7}
                  textcolor='pink'
                  backgroundcolor='green'
                  margin='auto'
                  borderradius='25px'
                  padding='2rem'
                >
                  <Icon icontype='userlist' size={3.7} iconcolor='pink' />
                  Massive With Icon
                </Button>
              </div>
            </Groupings>
          </ItemWrapper>

          <ItemWrapper>
            <h2>Internal Link</h2>
            <Groupings>
              <div>
                <h3>Standard</h3>
                <InternalLink to='/google'>Internal Link</InternalLink>
              </div>
              <div>
                <h3>Styled</h3>
                <InternalLink
                  fontsize={3.7}
                  textcolor='pink'
                  backgroundcolor='green'
                  margin='auto'
                  borderradius='25px'
                  padding='2rem'
                  to='/google'
                >
                  <Icon icontype='userlist' size={3.7} iconcolor='pink' />
                  Massive With Icon
                </InternalLink>
              </div>
            </Groupings>
          </ItemWrapper>

          <ItemWrapper>
            <h2>External Link</h2>
            <Groupings>
              <div>
                <h3>Standard</h3>
                <ExternalLink a='https://google.com'>
                  External Link
                </ExternalLink>
              </div>
              <div>
                <h3>Styled</h3>
                <ExternalLink
                  fontsize={3.7}
                  textcolor='pink'
                  backgroundcolor='green'
                  margin='auto'
                  borderradius='25px'
                  padding='2rem'
                  a='https://google.com'
                >
                  <Icon icontype='userlist' size={3.7} iconcolor='pink' />
                  Massive With Icon
                </ExternalLink>
              </div>
            </Groupings>
          </ItemWrapper>
        </Wrapper>
      </Switch>
    </Router>
  );
}

export default App;
