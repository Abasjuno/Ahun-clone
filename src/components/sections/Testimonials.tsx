import React from "react";
import styled from "styled-components";
import SlideCard from "./SlideCard";

export default function Testimonials() {
  return (
 
      <Container>
        <Wrap>
          <Title>
            <img src="/images/quote.svg" alt="" />
            <Text>
              <h1>Testimonials</h1>
              <p>See what people are saying.</p>
            </Text>
          </Title>
          <Slider>
            <Box>
              <SlideCard
                name="Iman Mohamed"
                desc="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis qui voluptatem eos assumenda consectetur "
              />
              <SlideCard
                name="Iman aaaa"
                desc="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis qui voluptatem eos assumenda consectetur "
              />
              <SlideCard
                name="Iman bbbbb"
                desc="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis qui voluptatem eos assumenda consectetur "
              />
              <SlideCard
                name="Iman cccc"
                desc="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis qui voluptatem eos assumenda consectetur "
              />
              <SlideCard
                name="Iman dddd"
                desc="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic perspiciatis qui voluptatem eos assumenda consectetur "
              />
            </Box>
          </Slider>
        </Wrap>
        <LowerContainer>
     
     <ImgWrap>
       <img src="/images/logo.svg" alt="" />
     </ImgWrap>
     <Business>
       <h1>Ahun Business</h1>
       <p>Using ahun business app you can promote your offerings, discounts and provide delivery service to your customers.
If you are an event organizer you can also promote your events to more than 80k users and sell your tickets digitally.

       </p>
       <BtnGroup>
         <Button>EVENT ORGANIZER</Button>
         <Buttonwhite>BUSINESS OWNER</Buttonwhite>
     </BtnGroup>
     </Business>
   </LowerContainer>
      </Container>
      
     
   
  );
}
const Container = styled.div`
  background: #fff;
  /* display:flex; */
`;
const LowerContainer = styled.div`
  display:flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1100px) {
      flex-direction:column;
    }

padding:50px;
`
const Wrap = styled.div`
  padding: 0 20px;
  padding-top: 100px;
  display: flex;
  @media (max-width: 1100px) {
      flex-direction:column;
    
    }
`;
const Title = styled.div`
  padding: 20px;
  padding-left: 10rem;
  flex: 1;
  @media (max-width: 1100px) {
    display:flex;
    justify-content:center;
    align-items:center;
   text-align:center;
  padding-left: 0;
    }
`;
const ImgWrap = styled.div`
width:25%;
height:300px;
display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 765px) {
    margin:100px 0;
    }
img{
width:300px;
padding:40px;
border-radius:20px;
box-shadow: 3px 9px 22px -3px rgba(0,0,0,0.75);
-webkit-box-shadow: 3px 9px 22px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 3px 9px 22px -3px rgba(0,0,0,0.75);
&:hover{
  box-shadow: 5px 5px 29px -2px rgba(0,0,0,0.75);
-webkit-box-shadow: 5px 5px 29px -2px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 5px 29px -2px rgba(0,0,0,0.75);
}

}
`;
const Text = styled.div``;
const Business = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction:column;
  text-align:flex-start;
  width:45vw;
  @media (max-width:1020px){
    width:90vw;
    justify-content: center;
    }
  
  p{
    font-size:1.15rem;
    font-weight:300;
    margin:20px 0 40px 0;
  }
  h1{
    font-size:3rem;
    font-weight:800;
    margin:20px 0 0 0;
    align-self:flex-start;
  }
`;
const BtnGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width:100%;
  height:170px;
  @media (max-width:510px){
    flex-direction:column;
    align-items: center;

    }
`
const Button = styled.button`
  
   background:#000;
   color:#fff;
   outline:none;
   border:none;
   border-radius:10px;
   padding:17px 32px;
   font-size:1rem;
   font-weight:600;
   cursor: pointer;
   border:4px solid #000;
   @media (max-width:510px){
    padding:12px 18px;
   font-size:.9rem;
   font-weight:500;
    }

`
const Buttonwhite = styled(Button)`
   background:transparent;
   color:#000;
   margin-left:20px;
   @media (max-width:510px){
     margin-left:0;
    margin:30px;
    }
`
const Box = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px ;
  @keyframes slide{
    0%{
        transform:translateX(232%);
        }
        20%{
            transform:translateX(232%);
        
        } 25%{
            transform:translateX(116%);
        
        } 40%{
            transform:translateX(116%);
        
        } 45%{
            transform:translateX(0%);
        
        } 60%{
            transform:translateX(0%);
        
        } 65%{
            transform:translateX(-116%);
        
        }
        80%{
            transform:translateX(-116%);
        
        }
        85%{
            transform:translateX(-232%);
        
        }
        100%{
            transform:translateX(-232%);
        }
`;
const Slider = styled.div`
  flex: 3;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
