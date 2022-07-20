import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";

function EventSlider() {
  return (
      <Container>
         
              
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Evant1.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1  className='title'>First slide label</h1>
            <p className='desc'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
                      className="d-block w-100"
            src="/images/Evant2.jpeg"
                      
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 className='title'>Second slide label</h1>
            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Evant3.jpeg"

            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 className='title'>Third slide label</h1>
            <p className='desc'>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/Evant4.jpeg"

            alt="Third slide"
            />
          <Carousel.Caption>
            <h1 className='title'>Third slide label</h1>
            <p className='desc'>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
            
    </Container>
  );
}

export default EventSlider;
const Container = styled.div`
  position:relative;
  height:90vh;
  width:100vw;
  img{
     height:90vh;
} 
&::before{
  content:"";
  width:100%;
  height:100%;
  background:#000;
  opacity:0.6;
  position:absolute;
  top:0;
z-index:2;
 }
`

// const Container = styled.div`
 
//   height:90vh;
//   width:99vw;
//   img{
//      height:90vh;
//      width:90vw;
//      z-index:1;
//      position:relative;
// } 
// &::before{
//   content:"";
//   width:100%;
//   height:120%;
//   /* background:#000; */
//   opacity:0.8;
//   position:absolute;
//   top:0;
// z-index:2;
// }
// `
