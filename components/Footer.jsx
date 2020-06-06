import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const MutedFooter = styled.footer`
  color: #AAA;
  text-align: center;
  margin: 1rem 0;
`;

export default function Footer() {
  return (
    <MutedFooter>
      Made with
      {' '}
      <Icon name="heart outline" color="red" />
      and
      {' '}
      <a href="https://nextjs.org">Next.JS</a>
      .
      {' '}
      <a href="https://github.com/ruslang02/ruslang.xyz">Source code</a>
      .
    </MutedFooter>
  );
}
