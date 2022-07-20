import React from "react";
import styled from "styled-components";
import Box from "./Box";

export default function Stats() {
  return (
      <Container>
      <Title>
        <h1>Stats</h1>
      </Title>
      <Wrap>
        <Box
          imgsrc="images/location.svg"
          title="2,000+"
          desc="Varfied places"
        />
        <Box imgsrc="images/peoples.svg" title="2,000+" desc="Varfied places" />
        <Box imgsrc="images/Events.svg" title="2,000+" desc="Varfied places" />
      </Wrap>
      <Title>
        <h1>Payment Partners</h1>
        <p>Supported payment methods.</p>
      </Title>
      <Div>
        <ImgeWrap>
          <img src="/images/telebirr.png" alt="" />
          <img src="/images/Amole.jpg" alt="" />
          <img src="/images/visa-mastercard.png" alt="" />
          <img src="/images/cbe_birr.jpeg" alt="" />
        </ImgeWrap>
        
      </Div>
    </Container>
  );
}
const Container = styled.div`
border-bottom:10px solid #4f3099;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  h1 {
    color: #fff;
    padding: 20px 0;
    font-size: 2rem;
  }
  p {
    color: #fff;
    padding: 20px 0;
    font-size: 1.2rem;
  }
 
`;
const Wrap = styled.div`
  /* background:red; */
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 120px;
  justify-content: space-around;
  @media (max-width:760px){
    margin:1rem 0;
    }
  
`;
const Div = styled.div`
    margin:5rem 10rem ;
`
const ImgeWrap = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-self: center;
  img {
    width: 7rem;
    height:7rem;
    margin:3rem 1rem;
    object-fit: contain;
    @media (max-width:760px){
    height:4rem;
    width:4rem;
    margin:1rem .5rem;
    }
  }
`;
