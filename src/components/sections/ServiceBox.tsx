import React from "react";
import styled from "styled-components";

interface propstype {
  imgsrc: string;
  title: string;
  desc: string;
}
export default function ServiceBox(props: propstype) {
  const { imgsrc, title, desc } = props;
  return (
    <Wrap>
      <ImgWrap>
        <Img src={imgsrc} alt="" />
      </ImgWrap>
      <h2>{title}</h2>
      <p>{desc}</p>
    </Wrap>
  );
}
const Wrap = styled.div`
    width:260px;
    height:250px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction:column;
    text-align:center;
    margin:0 20px;
    
    p{
        color:#fff;
        font-size:1rem;
        padding:5px;
        @media (max-width:760px){
      font-size:.8rem;
      
    }
    }
    h2{
        margin:5px;
        color:#fff;
        font-size:1.2rem;
        @media (max-width:760px){
      font-size:1rem;
      
    }
    }
    @media (max-width:760px){
      width:150px;
      height:270px;
    }
`
const ImgWrap = styled.div`
     width:90px;
     height:90px;
     background:#333;
     display: flex;
    justify-content: center;
    align-items: center;
    border-radius:50%;
`;
const Img = styled.img`
  width: 50px;
`;
