import React, { Component } from 'react';
import styled from 'styled-components';

const Header = styled.div`
  color: #222;
  font-size: 3em;
  margin: 0.1em;
  text-align: center;
`;
const SubHeader = styled.div`
  color: #333;
  font-size: 1em;
  margin: 0 1em;
  text-align: center;
`;

const Content = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

class Splash extends Component {
  render() {
    return (
      <Content>
        <Header>Hi, I'm Craig</Header>
        <SubHeader>Educator, Entrepreneur, Family Man</SubHeader>
      </Content>
    );
  }
}

export default Splash;
