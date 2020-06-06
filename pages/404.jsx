import React from 'react';
import Container from 'semantic-ui-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Page404() {
  return (
    <Container text>
      <Header />
      <h1 style={{ textAlign: 'center' }}>
        This page was not found.
      </h1>
      <Footer />
    </Container>
  );
}
export default Page404;
