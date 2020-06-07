import React from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';
import Head from 'next/head';
import MainSegment from '../components/MainSegment';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AbilitesSegment from '../components/AbilitesSegment';
import ProjectsSegment from '../components/ProjectsSegment';

const StyledContainer = styled(Container)`
  font-size: 16px;
  font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
`;
function HomePage() {
  return (
    <>
      <Head>
        <title>Ruslan Garifullin</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <StyledContainer>
        <Header />
        <MainSegment />
        <AbilitesSegment />
        <ProjectsSegment />
        <Footer />
      </StyledContainer>
    </>
  );
}
export default HomePage;
