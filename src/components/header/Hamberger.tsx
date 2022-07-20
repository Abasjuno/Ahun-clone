import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai"
import { MdEvent ,MdPeopleOutline,MdOutlineCopyright} from "react-icons/md"
import { FaMobileAlt } from "react-icons/fa"
import { RiGitRepositoryPrivateLine } from "react-icons/ri"





function Hamberger() {
  const [open, setOpen] = useState(false);
  return (
    <Berger onClick={()=>setOpen(!open)}>
      {open === false ? (
        <>
          <span></span>
          <span></span>
          <span></span>
        </>
      ) : (
                  <NAV>
                      <IconWraper>
        <Link to="/"> <Logo src="/images/logo-ahun.png" alt="logo-ahun" /></Link>    
                    </IconWraper>
            <NavItem>
                    <AiFillHome/>
            <Link to="/"> Home</Link>
          </NavItem>
          <NavItem><MdEvent/>
            <Link to="/"> Evants</Link>
          </NavItem>
          <NavItem><MdEvent/>
            <Link to="/events"> Evant Organizer</Link>
          </NavItem>
          <NavItem><MdEvent/>
            <Link to="/"> Blog</Link>
        </NavItem>   
          <NavItem><RiGitRepositoryPrivateLine/>
            <Link to="/"> Privacy</Link>
          </NavItem>
          <NavItem><FaMobileAlt/>
            <Link to="/"> Terms of use</Link>
          </NavItem>
          <NavItem><MdPeopleOutline/>
            <Link to="/"> Community Guidelines</Link>
          </NavItem>
          <NavItem><MdOutlineCopyright/>
            <Link to="/"> Copyright Policy</Link>
          </NavItem>
        </NAV>
      )}
    </Berger>
  );
}

export default Hamberger;
const Berger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
 
  span {
    height: 3px;
    width: 20px;
    background: #fff;
    margin: 2px;
    border-radius: 2px;
    display:none;
    @media(max-width:760px){
      display:block;

    }

  }

`;
const Logo = styled.img`
    width:130px;
`
const NAV = styled.div`
position:absolute;
background:#000;
width:370px;
height:100vh;
top:0;
left:0;
z-index:10;
display:flex;
flex-direction:column;
`
const IconWraper = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
  margin:12px 0;
`
const NavItem = styled.div`
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;   
  margin-left:30px;   
  a{
    color:#ddd;
    text-decoration:none;
    margin-left:20px;
    margin-top:5px;
  }
  svg{
    color:#ddd;
    font-size:20px;
  }
`;
