import styled from "styled-components";
import ServiceBox from "./ServiceBox";

export default function Services() {
  return (
    <Container>
      <TitleBox>
        <h1 className="font-face-gm">Services</h1>
        <p >Services we provide</p>
      </TitleBox>
      <Wrap>
        <ServiceBox imgsrc="/images/share.svg" title="Social Experience" desc="A one-of-a-kind experience where you can post vibes of your favorite places, events, and share your life style with a vibrant community."/>
        <ServiceBox imgsrc="/images/people.svg" title="Meet New People" desc="Connect and meet with new people who vibe at the same places or events as you."/>
        <ServiceBox imgsrc="/images/places.svg" title="Nearby Places" desc="Discover new and exciting nearby places from restaurants, entertainment, beauty salons to game zones."/>
        <ServiceBox imgsrc="/images/tickets.svg" title="Event Tickets "desc="Purchase tickets for events or reserve your spots for hiking tours and much more"/>
        <ServiceBox imgsrc="/images/discount.svg" title="Discount Coupons" desc="Get timely notifications about discounts and purchase coupons from your preferred businesses."/>
        <ServiceBox imgsrc="/images/delivery.svg" title="Delivery" desc="Fast and Reliable delivery from restuarants, marts and gift shops"/> 
      </Wrap>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  background: darkblue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  padding-bottom:60px;
  border-bottom-left-radius:100px ;
  border-bottom-right-radius:100px ;
  @media (max-width:760px){
    border-bottom-left-radius:40px ;
  border-bottom-right-radius:40px ;
    }
  
  `;
  const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;
  width:90%;
  `
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  height:220px;
  h1{
    color:#fff;
    font-size:3rem;
  }
  p{
    color:#fff;
    font-size: 1.3rem;
    font-weight:200;
  }
`;
