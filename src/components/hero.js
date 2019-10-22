import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Canvas from './Canvas';

const ImageBackground = styled.section`
  height: 40vh;
  background: linear-gradient(to top, #ffffff 1rem, transparent);

  + * {
    margin-top: 0;
  }
`;

const BackgroundCanvas = styled(Canvas)`
`;

const TextBox = styled('div')`
  background: linear-gradient(to top, #ffffff 1rem, transparent);
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 0;
  justify-content: flex-end;
  padding: 0 calc((100vw - 550px) / 2) 2rem;
  width: 100%;

  h1 {
    text-shadow: 1px 1px 3px #eeddff66;
    font-size: 2.25rem;
  }

  p,
  a {
    color: #222;
    margin: 0;
  }

  a {
    margin-top: 0.5rem;
  }
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "janko-ferlic-bear.jpg"}) {
        sharp: childImageSharp {
          fluid(traceSVG: { color: "#ddbbff66", background: "#fff" }) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <ImageBackground Tag="section">
      <BackgroundCanvas></BackgroundCanvas>
    </ImageBackground>
  )
}

export default Hero;