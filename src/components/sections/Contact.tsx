import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { TbBrandTelegram } from "react-icons/tb";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Contact() {
  return (
    <Container>
      <Top>
        <Wrap>
          <h1>Get in touch</h1>
          <SocialLinks>
            <BsInstagram />
            <BsFacebook />
            <BsTwitter />
            <TbBrandTelegram />
          </SocialLinks>
        </Wrap>
        <FormWraper>
          <h2>Send us a message</h2>
          <form>
            <Input>
              <input type="email" id="email" placeholder=" " />
              <label htmlFor="email"> Your Email </label>
            </Input>
            <Input>
              <input type="text" id="name" placeholder=" " />
              <label htmlFor="name"> Your Full Name</label>
            </Input>
            <Input>
              <textarea name="message" id="massage" placeholder=" "></textarea>
              <span>Your Message </span>
            </Input>
            <Input>
              <button>SEND</button>
            </Input>
          </form>
        </FormWraper>
      </Top>
      <Bottom>
        <Box>
          <img src="/images/logo-ahun.png" alt="" />
          <Btn>
            <Link to="https://apps.apple.com/us/app/ahun-people-places-events/id1474285014?platform=iphone">
              <img src="/images/google-play-button.svg" alt="" />
            </Link>
            <Link
              to="https://play.google.com/store/apps/details?id=com.ahun.android&hl=en_US&gl=US"
              style={{ margin: "15px" }}
            >
              <img src="/images/app-store.svg" alt="" />
            </Link>
          </Btn>
        </Box>
        <Box>
          <p>Links</p>
          <Links>
            <Small>
              <Link to="/">Blog</Link>
              <Link to="/">Events</Link>
              <Link to="/">Event Organizer</Link>
            </Small>
            <Small>
              <Link to="/">Privacy</Link>
              <Link to="/">Terms of use</Link>
              <Link to="/">Community Guidelines</Link>
            </Small>
          </Links>
        </Box>
        <Box>
          <p>Contact Info</p>
          <Link to="/">support@ahun.app</Link>
          <Link to="/">Addis Ababa, Ethiopia</Link>
          <Link to="/">Tel: +251 948888884</Link>
        </Box>
      </Bottom>
      <Footer>© Copyrighty 2022 Abas Junid Ahun clone.</Footer>
    </Container>
  );
}
const Container = styled.div`
background:#000;
`;
const Top = styled.div`
  display: flex;
  min-width: 80vw;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  h1 {
    font-size: 3rem;
    font-weight: 900;
    color: #fff;
    margin-top: 30px;
    @media (max-width: 1000px) {
      font-size: 2rem;
    }
  }
`;
const SocialLinks = styled.div`
  margin-top: 20px;
  svg {
    width: 26px;
    height: 26px;
    margin: 10px 22px;
    color: #fff;
  }
`;
const Wrap = styled.div``;
const FormWraper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 3rem;
  padding: 12px 40px;
  height: 410px;
  h2 {
    margin-bottom: 20px;
    color: #fff;
  }
  form {
    min-width: 380px;
    @media (max-width: 1000px) {
      min-width: 300px;
    }
  }
`;
const Input = styled.div`
  margin-top: 12px;
  position: relative;
  input {
    width: 100%;
    padding-top: 20px;
    border: none;
    background: none;
    color: #fff;
    border-bottom: 1px solid #fff;
    outline: none;
    &:focus ~ label,
    &:not(:placeholder-shown) ~ label {
      top: 0;
      color: rgb(3, 210, 210);
      font-size: 12px;
    }
  }
  textarea {
    width: 100%;
    height: 100%;
    padding-top: 20px;
    border: none;
    background: none;
    color: #fff;
    border-bottom: 1px solid #fff;
    outline: none;
    &:focus ~ span,
    &:not(:placeholder-shown) ~ span {
      top: 0;
      color: rgb(3, 210, 210);
      font-size: 12px;
    }
  }
  label {
    color: #fff;
    position: absolute;
    left: 0;
    bottom: 5px;
    cursor: text;
  }
  span {
    color: #fff;
    position: absolute;
    left: 0;
    top: 10px;
    cursor: text;
    font-size: 1rem;
  }
  button {
    width: 100%;
    height: 54px;
    background: #164eae;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 10px;
  }
`;
const Bottom = styled.div`
  display: flex;
  min-width: 80vw;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
  }
  border-bottom: 1px solid #fff;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 200px;
  img {
    width: 130px;
  }
  a {
    text-decoration: none;
    color: #fff;
    margin: 5px 0;
  }
  p {
    color: #fff;
    font-weight: 600;
  }
`;
const Links = styled.div`
  display: flex;
  text-align: left;
`;
const Small = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-right: 20px;
`;
const Btn = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
`;
const Footer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
