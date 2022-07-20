import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import Header from '../components/header/Header';
import Contact from '../components/sections/Contact';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Stats from '../components/sections/Stats';
import Testimonials from '../components/sections/Testimonials';

export default function Home() {
  return (
    <Container>
      <Header/>
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <Contact/>
    </Container>
  )
}
const Container = styled.div`
  background:#1D69E9;

`