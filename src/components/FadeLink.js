import React from 'react';
import Link from 'gatsby-plugin-transition-link';

function withFade(WrappedComponent) {
  const aniLength = 0.25;
  const aniDelay = aniLength * 1.5;
  return props => {
    return (
      <WrappedComponent
        {...props}
        exit={{
          length: aniLength,
        }}
        entry={{
          length: aniLength,
          delay: aniDelay,
        }}
      />
    );
  };
}
export default withFade(Link);
