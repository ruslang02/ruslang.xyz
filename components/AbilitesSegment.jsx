import { Card, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import React from 'react';
import Abilities from '../data/Abilities.json';

const AbilitesGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-content: start;
  @media (min-width: 576px) {
    grid-template-columns: 25% 25% 25% 25%;
  }
`;

const Ability = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin-bottom: 1em;
`;

const GradientIcon = styled(Icon)`
  background: ${(props) => (props.colors ? `-webkit-linear-gradient(45deg, ${props.colors.join(', ')})` : 'black')};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: 85px !important;
  height: 85px !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin-right: 0 !important;
`;

export default function AbilitesSegment() {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Skills and abilities</Card.Header>
      </Card.Content>
      <Card.Content>
        <AbilitesGrid>
          {Abilities.map((elem) => (
            <Ability key={elem.name}>
              <GradientIcon name={elem.icon} size="huge" colors={elem.colors} />
              <b>{elem.name}</b>
              <small>{elem.description}</small>
            </Ability>
          ))}
        </AbilitesGrid>
      </Card.Content>
    </Card>
  );
}
