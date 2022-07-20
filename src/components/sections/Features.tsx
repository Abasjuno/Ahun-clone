import styled from "styled-components";
const {Slide} = require('react-reveal');

export default function Features() {
  return (
    <Container>
      <WrapA>
        <Slide left>

              <Text>
                  
        <h1>Digital Tickets</h1>
        <p>
          With the vast number of smartphone users, digital tickets are here to
          stay. Ahun app with its list of countless events, users can easily buy
          their tickets and be provided with unique QR codes.
        </p>
              </Text>
        </Slide>
        <Slide right>

          <img src="/images/digital-ticket-phone.svg" alt="" />
        </Slide>
        
      </WrapA>

      <WrapB>
      <Slide left> 
          <img src="/images/analytics-phone.svg" alt="" />
          </Slide > 
          <Slide right>  <Text>
                  
        <h1>Analytics</h1>
        <p>
          Ahun Business Analytics is an advanced feature that allows you to
          track your event's user interaction/activity (Page Visits, Followers,
          Number of Shares, Number of Site Visits, Total Views, and Total
          Reach).
        </p>
          </Text></Slide>
      </WrapB>
      <WrapA>
      <Slide left>
          <Text>
            
        <h1>Wallet</h1>
        <p>
          Ahun's Wallet is a virtual wallet that shows the money you have earned
          on our app. It has real-time interactivity, allowing you to see the
          deviation with every purchase. It comes equipped with a "View
          Transaction" feature which lets you see every single purchase and its
          preferred payout methods.
        </p>
          </Text>
        </Slide >
        <Slide right> 
          <img src="/images/wallet-phone.svg" alt="" />
        </Slide>
      </WrapA>
      <WrapB>
      <Slide left> 
          <img src="/images/featured-events-phone.svg" alt="" />
          </Slide>
          <Slide right><Text>
                  
        <h1>Featured Events</h1>
        <p>
          To give some events more prominence and interaction than others, we
          "feature" a number of events. Featuring events means making your
          specific events look different from regular events on the app. Events
          we feature are more likely to attract the attention of users.
        </p>
          </Text></Slide>
      </WrapB>
    </Container>
  );
}
const Container = styled.div`

margin:20px 0;
`;
const WrapA = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;

img{
    width:600px;
    margin-right:-100px;
    margin-top:60px;

}
@media (max-width:960px){
    flex-direction:column;
    img{
        margin-right:0px; 
    }
}
`;
const WrapB = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
img{
    width:600px;
    margin-left:-100px;
    margin-top:60px;
    
}
@media (max-width:960px){
    flex-direction:column;
    img{
        margin-left:0px; 
    }
}
`;
const Text = styled.div`
    width:400px;
    text-align:left;
`