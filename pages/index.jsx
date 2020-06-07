import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import MainSegment from '../components/MainSegment';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AbilitesSegment from '../components/AbilitesSegment';
import ProjectsSegment from '../components/ProjectsSegment';

function HomePage() {
  return (
    <>
      <Head>
        <title>Ruslan Garifullin</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Container style={{ fontSize: '16px' }}>
        <Header />
        <MainSegment />
        <AbilitesSegment />
        <ProjectsSegment />
        <Footer />
      </Container>
    </>
  );
}
export default HomePage;
