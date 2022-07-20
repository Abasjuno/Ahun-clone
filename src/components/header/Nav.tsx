import React from 'react'
import styled from 'styled-components'
import {BsArrowDownShort} from "react-icons/bs"
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <NAV>
            <NavItem>
                <Link to="/"> Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/privacy"> Privacy</Link>
            </NavItem>
            <NavItem>
                <Link to="/events"> Evants</Link>
            </NavItem>
            <NavItem>
                <Link to="/evantorganizer"> Evant Organizer</Link>
            </NavItem>
            <NavItem>
                <Link to="/blog"> Blog</Link>
            </NavItem>
            
            <Button><span>DOWNLOAD    <BsArrowDownShort  style={{backgroundColor:"#000"}}/></span></Button>
        
        </NAV>
  )
}
const NAV = styled.div`
    box-sizing: inherit;
    display:flex;
    padding-left:10px;
   a{
    color:#fff;
    text-decoration:none;
    font-weight: bold;
    font-size: 18px;
    font-family: "Inter","Roboto",;
    margin:0 10px;
    padding-top:10px;
    
} 
@media(max-width:765px){
        flex-flow:column;
        position:absolute;
        display:none;
    }
`
const NavItem = styled.div`
    height:57px;
    display:flex;
    justify-content:center;
    align-items:center;
`
const Button = styled.button`
    margin-top:10px;
    align-self:center;
    width:163px;
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
       display:none;
    }
`

export default Nav
