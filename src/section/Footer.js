import React from 'react'
import styled from "styled-components"
import img1 from "../assets/Svgs/star_white_48dp.svg"
import {motion} from "framer-motion"
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const Section=styled.div`
min-height: 100vh;
width: 100%;
background-color: ${prop=>prop.theme.body};
color: ${prop=>prop.theme.text};

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: relative;
`

const LogoContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img {
    width: 10vw;
    height: auto;
  }
h3{
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontxxl};
}
`

const FooterComponent=styled(motion.footer)`
width: 80vw;
ul{
   display: flex;
justify-content: space-between;
align-items: center; 
list-style: none;
flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};
}
li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }
}



`

const Bottom=styled.div`

padding: 0.5rem 0;
  margin: 0 2rem;
  font-size: ${(props) => props.theme.fontlg};

display: flex;
justify-content: space-between;
align-items: center;

a {
    text-decoration: underline;
  }

`

const Footer = () => {
const {scroll}=useLocomotiveScroll();
const handleScroll=(id)=>{
    let e =document.querySelector(id);
    scroll.scrollTo(e,{
        offset:"-100",
        duration:2000,
        easing:[0.25,0.0,0.35,1.0],
    })
}

  return (
    <Section>
        <LogoContainer>
            <img data-scroll data-scroll-speed="2" src={img1} alt="Logo_Img" />
            <h3 data-scroll data-scroll-speed="-1">
          Wibe Studio
        </h3>
        </LogoContainer>

     <FooterComponent 
     initial={{y:"-300px"}}
     whileInView={{y:"0"}}
     viewport={{once:false}}
     transition={{duration:1.5}}
     >
        <ul>
            <li onClick={()=>{handleScroll("#Home")}}>Home</li>
            <li onClick={()=>{handleScroll(".About")}}>About</li>
            <li onClick={()=>{handleScroll("#Shop")}}>Shop</li>
            <li onClick={()=>{handleScroll("#New-arrival")}}>New Arrival</li>
            <li>Riviews</li>
        </ul>


        <Bottom>
            <span 
            data-scroll data-scroll-direction="horizontal" data-scroll-speed="2"
            >  &copy; 2023. All Rights Reserved.</span>
            <span
               data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2"
            > Made with &hearts; by{" "}          
                <a
              href="https://www.google.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              Kritan Mhz
            </a></span>
        </Bottom>
    </FooterComponent>
 

    </Section>
  )
}

export default Footer