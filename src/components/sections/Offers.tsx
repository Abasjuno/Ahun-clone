import {
  BsBell,
  BsFillCheckSquareFill,
  BsGraphUp,
  BsLightningCharge,
  BsPeople,
  BsShare,
} from "react-icons/bs";
import { HiOutlineTicket } from "react-icons/hi";
import styled from "styled-components";
import Box from "./Box";
import Features from "./Features";
import OfferBox from "./OfferBox";
const {Slide} = require('react-reveal');

export default function Offers() {
  return (
    <Container>
      <h1>
        What we <span>offer.</span>{" "}
      </h1>
      <p>
        Save time managing advertising & Content <br /> for your business.
      </p>
      <Wrap>
        <OfferBox
          imgsrc="/images/event-promotions.svg"
          title=" Analytics"
          desc="
        
        Ahun app has detailed reports for your event analytics which provides insights into your event, that ranges from user engagement, and the number of interactions users
        read more ...
        
        "
        />
        <OfferBox
          imgsrc="/images/digital-ticket-sales.svg"
          title="Digital Tickets"
          desc="
        
        As event promoters, we know how important it is to satisfy event-goers and make every transaction as smooth as possible. Ahun app provides a seamless digital
        read more ...
        read more ..."
        />
        <OfferBox
          imgsrc="/images/physical-ticket-sales.svg"
          title=" Physical Tickets"
          desc="
        
        
        Not only do we have a highly functioning digital ticketing service, but Ahun also provides a physical ticketing service with integrated QR code tickets to sell
        read more ..."
        />
        <OfferBox
          imgsrc="/images/analytics.svg"
          title="Event Promotion"
          desc="
        Ahun is a social media platform dedicated to showcasing events of organizers like you have to offer. We help our colorful community of users discover a
        read more ..."
        />
      </Wrap>
      <h1>Why Us?</h1>
      <Wrap>
      
        <Slide Top><Card>
          <BsBell />
          <h4>Weekly Push Notifications</h4>
          <h5>
            Ahun app has detailed reports for your event analytics which
            provides insights into your event, that ranges from user engagement,
            and the number of interactions users read more ...
          </h5>
          </Card></Slide>
          
        <Slide Top><Card>
          <BsLightningCharge />
          <h4>Fast and frictionless entry</h4>
          <h5>
            With our digital tickets, you can set up your tickets and make them
            live on read more ...
          </h5>
        </Card></Slide>
        <Slide Top><Card>
          <HiOutlineTicket />
          <h4> No Ticket Fraud</h4>
          <h5>
            No Ticket Fraud Ahun uses push notification campaigns so our users
            are notified of the events going on read more ...
          </h5>
        </Card></Slide>
        <Slide Top><Card>
          <BsShare />
          <h4> Contactless Transfer</h4>
          <h5>
            Contactless Transfer Event-goers can buy multiple tickets and
            transfer them to family and friends easily and conveniently read
            more ...
          </h5>
        </Card></Slide>
        <Slide Top><Card>
          <BsPeople />
          <h4> Audience</h4>
          <h5>
            Because we have a targeted demographic among our wide users we
            produce better results in read more ...
          </h5>
        </Card></Slide>
        <Slide Top><Card>
          <BsGraphUp />
          <h4> Analytics</h4>
          <h5>
            With detailed reports on interactions, you will have insights on
            Page Visits, Followers, Number of read more ...
          </h5>
        </Card></Slide>
      </Wrap>

      <Wrap>
        <Box
          imgsrc="images/location.svg"
          title="2,000+"
          desc="Varfied places"
        />
        <Box imgsrc="images/peoples.svg" title="2,000+" desc="Varfied places" />
        <Box imgsrc="images/Events.svg" title="2,000+" desc="Varfied places" />
      </Wrap>

      <h1>Partners</h1>
      <Div>
        <ImgeWrap>
          <img src="/images/aye_hiking.png" alt="" />
          <img src="/images/balageru.jpg" alt="" />
          <img src="/images/cheena_hiking.jpeg" alt="" />
          <img src="/images/chimp_event.png" alt="" />
          <img src="/images/ma_trip.jpg" alt="" />
          <img src="/images/krinfud.png" alt="" />
          <img src="/images/tobia.png" alt="" />
          <img src="/images/shega_events.png" alt="" />
          <img src="/images/mera_events.jpg" alt="" />
          <img src="/images/zebra_hiking.png" alt="" />
          <img src="/images/zelan.jpg" alt="" />
          <img src="/images/awtar.png" alt="" />
        </ImgeWrap>
      </Div>
      <h1>Features</h1>
      <Features />
      <h1> <span>Flexible</span>  Plans</h1>
      <p>
        Choose a plan that works best for
        <br /> you and your team.
      </p>
      <Plans>

      <Plan>
        <h2>FREE</h2>
        <p>Free features you need to start your events and sell tickets.</p>
        
          <ul>
           <li><h3>Plan include :</h3></li>
            <li><BsFillCheckSquareFill/> Event listing on the app</li>
          <li><BsFillCheckSquareFill/>Custom link to the event</li>
          <li><BsFillCheckSquareFill/>RSVP</li>
          <Button>GET START FOR FREE</Button>
        </ul>
      </Plan>
      <Plan>
        <h2>BASIC</h2>
        <p>The basics you need to set up your event and start selling tickets.</p>

          <ul>
           <li><h3>Plan include :</h3></li>
            <li><BsFillCheckSquareFill/>Event listing on the app</li>
          <li><BsFillCheckSquareFill/>Custom link to the event</li>
          <li><BsFillCheckSquareFill/>Featured listing on the app</li>
          <li><BsFillCheckSquareFill/>Push notification/ Social media promotion</li>
          <li><BsFillCheckSquareFill/>Unlimited digital ticket QR Codes</li>
          <li><BsFillCheckSquareFill/>2 ticket scanners</li>
          <Button>12% of Tickets free</Button>
        </ul>
        </Plan>
        <PlanP>
        <h2>FREE</h2>
        <p>Free features you need to start your events and sell tickets.</p>
        <ul>
           <li><h3>Plan include :</h3></li>
        <li><BsFillCheckSquareFill/>Event listing on the app</li>
          <li><BsFillCheckSquareFill/>Custom link to the event</li>
          <li><BsFillCheckSquareFill/>Featured listing on the app</li>
          <li><BsFillCheckSquareFill/>Push notification/ Social media promotion</li>
          <li><BsFillCheckSquareFill/>Unlimited digital ticket QR Codes</li>
          <li><BsFillCheckSquareFill/>Unlimited digital ticket QR Codes</li>
          <li><BsFillCheckSquareFill/>Paid advertisement/ Influencer advertisement</li>
          <li><BsFillCheckSquareFill/>20 ticket scanners [2 free]</li>
          <Button>12% of Tickets free + 1400 birr per <br/> scanner</Button>
        </ul>
      </PlanP>
      </Plans>
      <h3>Frequently Asked Question</h3>
      <p>The most common questions about how our business works and<br/> what can do for you.</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  text-align: center;

  h1 {
    margin-top: 50px;
    span {
      color: #673ab7;
    }
  }
  p {
    font-size: 20px;
  }
`;
const Wrap = styled.div`
  display: flex;
  align-items: space-around;
  justify-content: space-evenly;
  width: 90vw;
  flex-wrap: wrap;
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 300px;
  margin: 40px 20px;
  svg {
    color: #000;
    font-size: 32px;
    margin: 20px;
  }
  h5 {
    font-weight: 300;
    font-size: 18px;
  }
  h4 {
    font-size: 18px;
  }
`;
const Div = styled.div`
  margin: 5rem 10rem;
`;
const ImgeWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-self: center;
  img {
    width: 7rem;
    height: 7rem;
    margin: 3rem 3rem;
    object-fit: contain;
    @media (max-width: 760px) {
      height: 4rem;
      width: 4rem;
      margin: 1rem 0.5rem;
    }
  }
`;
const Button = styled.button`
  
   background:#000;
   color:#fff;
   outline:none;
   border:none;
   border-radius:10px;
   width:100%;
   margin:20px 0;
   height:48px;
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
const Plans = styled.div`
display:flex;
@media (max-width:1000px){
    flex-direction:column;
    }

  
`
const Plan = styled.div`
 display: flex;
  justify-content:space-evenly;
  flex-direction: column;
  width:380px;
  text-align:center;
  margin:20px;
  margin-bottom:50px;
  svg{
    margin:5px;
  }
  h2,p{
    
    padding:20px 0px; 
  }
  padding:20px;
  ul{
    text-align:left;

    padding:0;

  }
  li{
    list-style:none;
    margin:5px 0;
  }
  border-radius:5px;
box-shadow: 3px 9px 22px -3px rgba(0,0,0,0.75);
-webkit-box-shadow: 3px 9px 22px -3px rgba(0,0,0,0.75);
-moz-box-shadow: 3px 9px 22px -3px rgba(0,0,0,0.75);
`
const PlanP = styled(Plan)`
color:#fff;
  background:#673ab7;
`