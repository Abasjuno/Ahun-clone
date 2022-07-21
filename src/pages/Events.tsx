import styled from "styled-components";
import Header from "../components/header/Header";
import Ticket from "../components/sections/Ticket";

export default function Evants() {
  return (
    <>
      <W>
        <Header />
      </W>
      <Container>
        <h2>Upcoming Events</h2>
        {/* <Filter>
          <Button>click  me</Button>
          <Button>click  me</Button>
          <Button>click  me</Button>
          <Button>click  me</Button>
          <Button>click  me</Button>
          <Button>click  me</Button>
          <Button>click  me</Button>
          <Button>click  me</Button>
          <Button>click  me</Button>
        </Filter> */}
        <Wrap>
          <Ticket imgsrc={"/images/Ticket3.jpeg"} title={"Bergud Fest"} date={"Sun,Jul 24 (6 PM) "} amount={"FREE"} />
          <Ticket imgsrc={"/images/Ticket3.jpeg"} title={"Bergud Fest"} date={"Sun,Jul 24 (6 PM) "} amount={"FREE"}/>
          <Ticket imgsrc={"/images/Ticket3.jpeg"} title={"Bergud Fest"} date={"Sun,Jul 24 (6 PM) "} amount={"FREE"}/>
          <Ticket imgsrc={"/images/Ticket3.jpeg"} title={"Bergud Fest"} date={"Sun,Jul 24 (6 PM) "} amount={"FREE"}/>
          <Ticket imgsrc={"/images/Ticket3.jpeg"} title={"Bergud Fest"} date={"Sun,Jul 24 (6 PM) "} amount={"FREE"}/>
          <Ticket imgsrc={"/images/Ticket3.jpeg"} title={"Bergud Fest"} date={"Sun,Jul 24 (6 PM) "} amount={"FREE"}/>
          <Ticket imgsrc={"/images/Ticket3.jpeg"} title={"Bergud Fest"} date={"Sun,Jul 24 (6 PM) "} amount={"FREE"}/>
          <Ticket imgsrc={"/images/Ticket3.jpeg"} title={"Bergud Fest"} date={"Sun,Jul 24 (6 PM) "} amount={"FREE"}/>
          <Ticket imgsrc={"/images/Ticket3.jpeg"} title={"Bergud Fest"} date={"Sun,Jul 24 (6 PM) "} amount={"FREE"}/>
          <Ticket imgsrc={"/images/Ticket3.jpeg"} title={"Bergud Fest"} date={"Sun,Jul 24 (6 PM) "} amount={"FREE"}/>
          <Ticket imgsrc={"/images/Ticket3.jpeg"} title={"Bergud Fest"} date={"Sun,Jul 24 (6 PM) "} amount={"FREE"}/>
          
        </Wrap>
      </Container>
    </>
  );
}
const Container = styled.div`
  padding: 30px 80px;
@media (max-width: 1000px) {
    
  padding: 30px 10px;
    
      }
`;
const W = styled.div`
  height: 14vh;
  background: #ccc;
`;
// const Filter = styled.div`
// display :flex;
// border-top: 1px solid #ddd;
// border-bottom: 1px solid #ddd;


// `;
const Wrap = styled.div`

display :flex;
border-top: 1px solid #ddd;
border-bottom: 1px solid #ddd;
flex-wrap:wrap;
align-items:center;
justify-content:flex-start;


`;
const Button = styled.button`
 
  color: #666;
  outline: none;
  border: none;
  border-radius: 30px;
  width: 100%;
  margin: 20px 10px;
  height: 38px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  border: 1px solid #ccc;

  @media (max-width: 510px) {
    padding: 12px 18px;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;
