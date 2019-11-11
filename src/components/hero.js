import React from 'react';
import styled from '@emotion/styled';
import Canvas from './Canvas';

const CanvasBackground = styled.section`
  height: 40vh;
  background: linear-gradient(to top, #ffffff 1rem, transparent);

  + * {
    margin-top: 0;
  }
`;

class Hero extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <CanvasBackground>
        <Canvas></Canvas>
      </CanvasBackground>
    );
  }
}

export default Hero;
