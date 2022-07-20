import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../fonts/Visby-Round-www.Dfonts.org/OTF/VisbyRoundCF-ExtraBold.otf";
const {Slide} = require('react-reveal');
export default function Hero() {
  return (
    <Container>
      <HeroImg src={"/images/hero-img.png"} />
      <Slide right>

      <HeroTextWrap>
        <h1 className="font-face-gm">Ahun app find</h1>
        <Words>
          <span className="font-face-gm">peoples </span>
          <span className="font-face-gm"> places </span>
          <span className="font-face-gm">events</span>
        </Words>
        <p className="font-face-gm">
          Your one-stop destination for finding where to go out and who to go
          out with.
        </p>
        <Btn>
          <Link to="https://apps.apple.com/us/app/ahun-people-places-events/id1474285014?platform=iphone"><img src="/images/google-play-button.svg" alt="" /></Link>
          <Link to="https://play.google.com/store/apps/details?id=com.ahun.android&hl=en_US&gl=US" style={{margin:"15px"}}><img src="/images/app-store.svg" alt="" /></Link>
        </Btn>
      </HeroTextWrap>
      </Slide>
    </Container>
  );
}
const Container = styled.div`
  background: blue;
  padding:110px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1020px) {
    flex-direction:column;
    padding: 20px;
    height:100%;
    }
    
`;
const HeroImg = styled.img`
  width: 350px;
  
  @media (max-width: 1020px) {
    width: 250px;
 
  margin-top:100px;

    }
`;
const Btn = styled.div`
display:flex;
flex-wrap:nowrap;
justify-content:center;
align-items:center;
margin-bottom:30px;
  
`
const HeroTextWrap = styled.div`
  height: 325px;
  width: 500px;
   padding:0 30px;
  margin-top:100px;
  justify-content:center;
  @media (max-width:600px) {
      width:250px;
      padding:0;
      margin-top:10px;
  }
  h1 {
    font-size: 3.75rem;
    font-weight: 800;
    font-family: VisbyRoundCF, Open Sans, Inter, -apple-system, sans-serif;
    color: #fff;
    @media (max-width: 1020px) {
      font-size: 2rem;
  }
  }
  p {
    font-size: 1.3rem;
    color: #fff;
    @media (max-width: 600px) {
      font-size: 1rem;
    
  }
  }
  img{

    @media (max-width: 600px) {
      width:120px;
  }
 
}
`;
const Words = styled.div`
  overflow: hidden;
  height: 4.2rem;
  span {
    display: block;
    line-height:4rem;
    color: #fff;
    font-size: 3.75rem;
    font-weight: 600;
    animation: scroll_words 7s infinite;
    @media (max-width: 1020px) {
      font-size: 2rem;
  }
  }
  @keyframes scroll_words {
    33% {
      transform: translateY(-120%);
    }
    66% {
      transform: translateY(-212%);
    }
  }
`;
