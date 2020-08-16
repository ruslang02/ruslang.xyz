import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';
import Projects from '../data/Projects';

const PContainer = styled(Card.Content)`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
  padding-bottom: 0 !important;
  @media (min-width: 768px) {
    grid-template-columns: 50% 50%;
    padding-right: 2rem !important;
    padding-bottom: 1rem !important;
  }
`;
const PCard = styled(Card)`
  background: white url("${(props) => props.bg}") center/cover no-repeat !important;
  display: inline-block !important;
  overflow: hidden;
  width: 100% !important;
  margin: 0 !important;
  img {
    width: 100%;
  }
  &:hover .description {
    max-height: 4.5em;
  }
`;

PCard.Content = styled(Card.Content)`
  background: rgba(255,255,255,0.75) !important;
  backdrop-filter: blur(5px);
  box-shadow: 0px -2px 5px rgba(0,0,0,0.3) !important;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

PCard.Header = styled(Card.Header)`
  margin: 0 !important;
`;
PCard.Description = styled(Card.Description)`
  max-height: 0;
  transition: max-height .5s ease;
  line-height: 1.5;
  overflow: hidden;
  margin-top: 0 !important;
`;

export default function ProjectsSegment() {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Projects</Card.Header>
      </Card.Content>
      <PContainer>
        {
          Projects.map((project) => (
            <PCard bg={project.image} key={project.name}>
              <img src="./img/169.png" alt="16-9 placeholder" />
              <PCard.Content>
                <PCard.Header>{project.name}</PCard.Header>
                <PCard.Description>
                  {project.description}
                  <br />
                  {(project.links || []).map((link, index, orig) => (
                    <>
                      <a href={link[1]}>{link[0]}</a>
                      {index !== orig.length - 1 ? ' · ' : ''}
                    </>
                  ))}
                </PCard.Description>
              </PCard.Content>
            </PCard>
          ))
        }
      </PContainer>
    </Card>
  );
}
