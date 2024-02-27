import React from 'react';
import img from '../Image/img1.webp';
import img2 from '../Image/img2.jpeg';
import img3 from '../Image/img3.jpeg';
import { Carousel ,Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home(){

return(
<>
<div className = "container mt-5 p-5">
<h1>  Welcome To E-Shopping Cart </h1>
<Carousel className="home">
  <Carousel.Item interval={1000}>
    <Image className="d-block w-100  pe-none" rounded src={img} alt="First slide"/>
  </Carousel.Item>

  <Carousel.Item interval={1000}>
    <Image className="d-block w-100  pe-none" rounded src = {img2} alt="Second slide"/>
  </Carousel.Item>

  <Carousel.Item interval={1000}>
    <Image className="d-block w-100  pe-none" rounded src = {img3} alt="Third slide"/>
  </Carousel.Item>
</Carousel>
</div>
</>
);
}
export default Home;
