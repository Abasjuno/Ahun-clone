import { AiTwotoneStar } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";
import styled from "styled-components";

interface propstype {
    name: string;
  desc: string;
}

export default function SlideCard(props: propstype) {
  const {  name, desc } = props;
  
  return (
    <Wrap>
      <img src="/images/quote.svg" alt="" />
      <ImgWrap>
        <BsPersonCircle/>
      </ImgWrap>
      <h2>{name}</h2>
      <p>{desc}</p>
      <Rating>
        <AiTwotoneStar />
        <AiTwotoneStar />
        <AiTwotoneStar/>
        <AiTwotoneStar/>
        <AiTwotoneStar/>
      </Rating>
    </Wrap>
  )
}
const Wrap = styled.div`
  min-width:100%;
  height:220px;
  display: flex;
  justify-content: space-evenly;
  align-items:center;
  text-align:center;
  flex-direction: column;
  position:relative;
  margin:40px;
  img{
    position:absolute;
    opacity:.06;
    width:350px;
    height:350px;
    right:10%;
    /* top:10px; */
  }
  h2{
    color:#4f3099;
    font-size:1.2rem;
  }
  animation:slide 16s infinite
  
`

const ImgWrap = styled.div`
background:#ddd;
width:40px;
height:40px;
margin-bottom:10px;
border-radius:50%;
 svg{
  font-size:40px; 
  object-fit:contain;
 }
`
const Rating= styled.div`
  svg{
    color:goldenrod;
  }
`