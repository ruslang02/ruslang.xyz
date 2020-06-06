import React from 'react';
import styled from 'styled-components';
import { Segment, Image } from 'semantic-ui-react';

const bday = new Date(2002, 3, 21);
const dateSince = new Date(new Date().getTime() - bday.getTime());

const FlexSegment = styled(Segment)`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  text-align: center;
  flex-shrink: 0;
  @media (min-width: 768px) {
    text-align: left;
    margin-right: 1rem;
  }
`;

const InfoContainer = styled.div`
  text-align: center;
  margin: 1rem;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export default function MainSegment() {
  return (
    <FlexSegment>
      <ImageContainer>
        <Image src="/img/avatar.png" size="small" circular style={{ display: 'inline-block' }} />
      </ImageContainer>
      <InfoContainer>
        <h2>Ruslan Garifullin</h2>
        <p>A guy from snowy Russia that is very passionate about writing code.</p>
        <p>
          I am
          <b>{dateSince.getYear() - 70}</b>
          {' '}
          years old, freshman in
          <a href="https://hse.ru">Higher School of Economics</a>
          , Software Engineering.
        </p>
      </InfoContainer>
    </FlexSegment>
  );
}
