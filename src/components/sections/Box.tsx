import styled from "styled-components";

interface propstype {
  imgsrc: string;
  title: string;
  desc: string;
}
export default function Box(props: propstype) {
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
  /* background:blue; */
  width: 200px;
  height: 260px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (max-width:760px){
    height:200px;
    }
  
  h2 {
    color: #666;
    font-size: 2rem;
  }
  p {
    color: #666;
  }
`;
const ImgWrap = styled.div``;
const Img = styled.img`
  color: #666;
  width: 80px;
`;
