import React from 'react';
import styled from '@emotion/styled';

const Stack = styled.section`
  --stack-space: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & ${({ recursive }) => (recursive ? '' : '>')} * + * {
    margin-top: var(--stack-space);
  }

  ${({ splitAfter }) =>
    splitAfter
      ? `
            &:only-child {
              height: 100%;
            }
      
            & > :nth-child(${splitAfter}) {
              margin-bottom: auto;
            }`
      : ''}
`;

export default Stack;
