import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Canvas from './Canvas';

const ImageBackground = styled.section`
  height: 40vh;

  + * {
    margin-top: 0;
  }
`;

const BackgroundCanvas = styled(Canvas)`
`;

const TextBox = styled('div')`
  background: linear-gradient(to top, #ffffff 1rem, #ddbbff00 7rem, transparent 1rem);
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
    <ImageBackground
      Tag="section"
      fadeIn="soft">
      <BackgroundCanvas></BackgroundCanvas>
      <TextBox>
        <h1>A Pile of Bears &hearts;</h1>
        <p>
          hello worl <Link to="/about/">Learn about me &rarr;</Link>
        </p>
      </TextBox>
    </ImageBackground>
  )
}

export default Hero;