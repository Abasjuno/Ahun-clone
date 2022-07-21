import styled from "styled-components";
const {Slide} = require('react-reveal');

interface propstype {
  imgsrc: string;
  title: string;
  desc: string;
}
export default function OfferBox(props: propstype) {
  const { imgsrc, title, desc } = props;
  return (
    <Slide bottom>
    <Wrap>
      <ImgWrap>
        <Img src={imgsrc} alt="" />
      </ImgWrap>
      <h2>{title}</h2>
      <small>{desc}</small>
      </Wrap>
      </Slide>
  );
}
const Wrap = styled.div`
  /* background:blue; */
  width: 200px;
  height: 400px;
  margin: 30px;
  margin-bottom:100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align:center;
  @media (max-width:760px){
    height:200px;
    }
  
  h2 {
    color: #000;
    font-size: 1.1rem;
  }
  small {
    color: #666;
    font-size: .9rem;

  }
`;
const ImgWrap = styled.div``;
const Img = styled.img`
  color: #fff;
  width: 200px;
`;
