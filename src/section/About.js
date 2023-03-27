import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion"

import img1 from "../assets/Images/1.webp"
import img2 from "../assets/Images/2.webp"
import img3 from "../assets/Images/3.webp"


const Section=styled.section`
position:relative;
min-height: 100vh;
width: 80vw;

display: flex;
margin: 0 auto;

@media (max-width: 48em) {
    width: 90vw;
  }
  @media (max-width: 30em) {
    width: 100vw;
  }
`


const Title=styled(motion.h1)`
position: absolute;
top: 1rem;
left: 5%;
font-size: ${prop=>prop.theme.fontBig};
font-family: "Kaushan Script";
font-weight: 300;
z-index: 5;

@media (max-width: 64em) {
    font-size: ${(props) => `calc(${props.theme.fontBig} - 5vw)`};
    top: 0;
    left: 0%;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxxxl};
  }
`

const Left=styled.div`
width: 50%;
position: relative;
margin-top: 20%;
font-size: ${prop=>prop.theme.fontlg};
color:${prop=>prop.theme.body};
z-index: 5;



  @media (max-width: 64em) {
    width: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) !important;
    margin: 0 auto;
    padding: 2rem;
    font-weight: 600;
    backdrop-filter: blur(2px);
    background-color: ${(props) => `rgba(${props.theme.textRgba},0.4)`};
    border-radius: 20px;
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 2rem;
    width: 70%;
  }
`
const Right=styled.div`
width: 50%;
position: relative;


img{
  height: auto;
  width: 100%;


  .img-1{
    @media (max-width: 64em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
    

  }
  }

}

.img-2{
  position: absolute;
  width: 40%;
    right: 95%;
    bottom: 5%;
}
.img-3{
  position: absolute;
    width: 40%;
    left: 80%;
    top: 30%;

    //Man paryo vane rakha naa
    /* left: 80%;
    top: 25%;
    transform: translateY(-50%); */
}
`


const About = () => {


  return (
    <Section id='target-section' className='About'>
<Title
data-scroll
data-scroll-speed="-2"
data-scroll-direction="horizontal"
>About Us</Title>

<Left 
 data-scroll data-scroll-sticky data-scroll-target="#target-section"
 >We're fashion studio based in california. 
We create unique designs that will blow your mind. We also design unique jewellary pieces. 
Fashion is an ART that can not be grasped by everyone.

<br /><br />

We are very dedicated to making our products. 
We offer unique and creative products to a wide range of people. 
We have a variety of styles, but for most people, all of the options are in the box. 
We specialize in making things that make you happy.
<br /><br />
We strive to build on our vision. As a fashion label, we do our best to create amazing experiences for all people. 
We are always looking to make something that is easy for everyone.
</Left>
<Right>
<img className='img-1'  src={img1} alt="img1" />
<img data-scroll data-scroll-speed="3"    src={img2} alt="img2" className='img-2'/>
<img data-scroll  data-scroll-speed="3" data-scroll-direction="horizontal"   src={img3} alt="img3" className='img-3'/>
</Right>


</Section>




  )
}

export default About