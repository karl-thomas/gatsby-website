import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Canvas from './Canvas';

const CanvasBackground = styled.section`
  height: 40vh;
  background: linear-gradient(to top, #ffffff 1rem, transparent);

  + * {
    margin-top: 0;
  }
`;

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "janko-ferlic-bear.jpg" }) {
        sharp: childImageSharp {
          fluid(traceSVG: { color: "#ddbbff66", background: "#fff" }) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <CanvasBackground>
      <Canvas></Canvas>
    </CanvasBackground>
  );
};

export default Hero;
