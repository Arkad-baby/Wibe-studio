import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import {motion} from "framer-motion"
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const Navlist=styled(motion.div)`

position: absolute;
top:${(prop) => prop.click ? "0" :"-5rem"};

display: flex;
justify-content: center;
align-items: center;
z-index: 6;
width: 100vw;

transition: all 0.3s ease;

@media (max-width:40em){
  top:${(prop) => prop.click ? "0" :"-50vh"};
  }
`

const Menulist=styled(motion.ul)`
position:relative;
padding: 0rem 10rem;
width: 100%;
height: ${(props) => props.theme.navHeight};

display: flex;
justify-content: space-around;
align-items: center;

background-color: ${props=>props.theme.body};
color: ${props=>props.theme.text};
list-style: none;

@media (max-width: 50em) {
    padding:0rem 5rem;
  }

@media (max-width: 40em) {
    flex-direction:column;
    padding:0rem 0;
    height: 50vh;
  }

`

const Menubtn=styled(motion.li)`

position: absolute;
 width: 15rem; 
 height: 2.5rem;

  font-size: ${props=>props.theme.fontmd};
  font-weight: 600;
 color: ${props=>props.theme.body}; 
background-color:rgba(255,255,255,0.7); 
text-transform: uppercase;


 clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
border:none;
outline:none;

cursor:pointer;

  top: 100%;
  left: 50%;
  transform: translateX(-50%);

   display: flex;
  justify-content: center;
  align-items: center; 
  @media (max-width:40em){
    height: 2rem;
    width: 10rem;
  }
`

const MenuItem=styled(motion.li)`
text-transform: uppercase;
color: ${props=>props.theme.text};

@media (max-width: 40em) {
    flex-direction:column;
    padding:0.5rem 0;
  }
`




const Navbar = () => {
  const {scroll}=useLocomotiveScroll();
  const handleScroll=(id)=>{
      let e =document.querySelector(id);
      scroll.scrollTo(e,{
          offset:"-100",
          duration:2000,
          easing:[0.25,0.0,0.35,1.0],
      })
  }

  const [click,setClick]=useState(false);

  return (
    <Navlist click={click}
    initial={{y:"-100%"}}
    animate={{y:0}}
    transition={{duration:2,delay:5.5}}> 
      <Menulist drag="y" dragConstraints={{top:0, bottom:70}} dragElastic={0.05} dragSnapToOrigin >
              <Menubtn onClick={()=>setClick(!click)}>Menu</Menubtn>
               <MenuItem whileHover={{scale:1.1, y:-5, cursor:"pointer"}} whileTap={{scale:0.9}} onClick={()=>{handleScroll("#Home")}}>Home</MenuItem>
               <MenuItem whileHover={{scale:1.1, y:-5, cursor:"pointer"}} whileTap={{scale:0.9}} onClick={()=>{handleScroll(".About")}}>About</MenuItem>
               <MenuItem whileHover={{scale:1.1, y:-5, cursor:"pointer"}} whileTap={{scale:0.9}} onClick={()=>{handleScroll("#Shop")}}>Shop</MenuItem>
               <MenuItem whileHover={{scale:1.1, y:-5, cursor:"pointer"}} whileTap={{scale:0.9}} onClick={()=>{handleScroll("#New-arrival")}}>New Arrival</MenuItem>

      </Menulist>
 
   
        </Navlist>
  )
}

export default Navbar