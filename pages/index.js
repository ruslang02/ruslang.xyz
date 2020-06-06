import { Container } from "semantic-ui-react";
import { MainSegment } from "../components/MainSegment";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AbilitesSegment } from "../components/AbilitesSegment";
import { ProjectsSegment } from "../components/ProjectsSegment";
function HomePage() {
  return (
    <Container text>
      <Header />
      <MainSegment />
      <AbilitesSegment />
      <ProjectsSegment />
      <Footer />
    </Container>
  )
}
export default HomePage;