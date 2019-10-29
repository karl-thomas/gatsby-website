import React from 'react';
import { TransitionState } from 'gatsby-plugin-transition-link';
import posed from 'react-pose';

const Fade = posed.section({
  hidden: {
    opacity: 0,
    transition: ({ entry: { length } }) => ({ duration: length * 1000 }),
  },
  visible: {
    opacity: 1,
    transition: ({ exit: { length } }) => ({ duration: length * 1000 }),
  },
});

const FadeWrapper = ({ children, className }) => (
  <TransitionState>
    {({ transitionStatus, exit, entry }) => {
      return (
        <Fade
          pose={
            ['entering', 'entered'].includes(transitionStatus)
              ? 'visible'
              : 'hidden'
          }
          {...{ exit, entry, transitionStatus, className }}
        >
          {children}
        </Fade>
      );
    }}
  </TransitionState>
);

export default FadeWrapper;
