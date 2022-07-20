import styled from "styled-components"
import Header from "../components/header/Header"
import Contact from "../components/sections/Contact"
import EventSlider from "../components/sections/EventSlider"
import Offers from "../components/sections/Offers"


export default function EventOrganizer() {
  return (
    <Container>
      <W>
        
      <Header/>
      </W>
      <EventSlider />
      <Offers />
      
      <Contact/>
    </Container>
  )
}
const Container = styled.div`
`
const W = styled.div`
 background:#000; 
  
`