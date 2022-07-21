import styled from "styled-components"
import Header from "../components/header/Header"

export default function Privacy() {
  return (
    
      <W><Header /><Container>
      <h1>Privacy Policy</h1>
      <h3>Updated at 2021-02-10</h3>
      <p>
        Ahun. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Ahun.
      </p>
      <p>This Privacy Policy applies to our application named Ahun, and its associated subdomains (collectively, our "Service"). By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of use.</p>

      <h3>Definitions and key terms
      </h3>
      <p>For this Privacy Policy:</p>
      <h3>Cookie</h3>

      <h3>Company</h3>
      <p>Where Ahun or the owners/founders of Ahun are bases in Ethiopia.</p>
    </Container></W>


  )
}
const Container = styled.div`
  
  margin: 50px 250px ;
  padding:40px 70px;
  /* background:red; */
  border-radius:10px;
box-shadow: 3px 9px 22px -3px rgba(0,0,0,0.75);
-webkit-box-shadow: 3px 9px 22px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 3px 9px 22px -3px rgba(0,0,0,0.75);
display:flex;
flex-direction:column;
h1{
  align-self:center;
  margin-bottom:20px;
  font-size:30px;
}
h3{
  font-size:18px;
font-weight:500;
}
p{
  font-size:16px;
margin-top:10px;
}
@media (max-width:1000px){
  margin: 50px 50px ;
  padding:40px 20px;

    }
`
const W = styled.div`
height:15vh;
 background:#1D69E9; 
`
