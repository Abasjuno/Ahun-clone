import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Hamberger from './Hamberger';
import Nav from './Nav';
export default function Header() {
  return (
    
      <NavContainer >
          <nav>
          <Hamberger />
          </nav>
        <Link to="/"> <Logo src="/images/logo-ahun.png" alt="logo-ahun" /></Link>
          <Nav />  
          <Button><span>DOWNLOAD </span></Button>  
    </NavContainer>
  )
}
const Logo = styled.img`
    width:130px;
    @media (max-width: 765px) {
      width:100px;
    }
    
`
const NavContainer = styled.div`
    display:flex;
    width:100vw;
    align-items:center;
    justify-content:space-around;
    background:transparent;
    padding:25px 0 ;
     nav{
        display:none;
        @media (max-width: 765px) {
      display: block;
    }
    }
`
const Button = styled.button`
    display:none;
    margin-top:10px;
    align-self:center;
    width:163px;
    @media (max-width: 765px) {
      width:114px;
      height:40px;
    }
    height:46px;
    outline:none;
    border:none;
    border-radius:180px;
    position:relative;
    cursor:pointer;
    background:linear-gradient(60deg,red,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00c8,red);

    &::after{
        content:"";
        position:absolute;
        display:block;
        border-radius:180px;
        width:calc(100% - 6px);
        height:calc(100% - 6px);
        top:3px;
        left:3px;
        background:#000;
    }
    span {
    width: 100%;
    height: 100%;
    font-size:15px;
    font-weight:500;
    @media (max-width: 765px) {
        font-size:14px;
        font-weight:400;
    }
    color:#fff;
    z-index:1;
    position:relative;
    background:transparent;
    svg{
        font-size:25px; 
    }
    }
    &::before{
    content:"";
    width:100%;
    height:100%;
    outline:none;
    border:none;
    border-radius:180px;
    position:absolute;
    background:linear-gradient(60deg,red,#ff7300,#fffb00,#48ff00,#00ffd5,#002bff,#7a00ff,#ff00c8,red);
    top:0;
    left:0;
    filter:blur(10px);
    background-size:400%;
    animation:animate 20s linear infinite;
    }

    @keyframes animate{
        0%{
            background-position:0 0;
        }
        50%{
            background-position:400% 0;
        }
        100%{
            background-position:0 0;
        }
    }
    @media(max-width:765px){
       display:block;
    }
`

