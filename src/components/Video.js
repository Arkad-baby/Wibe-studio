import React from 'react'
import  styled from 'styled-components'
import VideoGirl from "../assets/Walking Girl.mp4";
// import themes from "../styles/themes"
import {motion} from "framer-motion"

const VideoContainer=styled.section`
position: relative;
height: 100vh;
width: 100%;


video{
    height: 100vh;
    width: 100%;
    object-fit: cover;

    @media (max-width:48em){
      object-position:center 10%;
    }
    @media (max-width:30em){
      object-position:center 50%;
    }
}

`
const DarkOverlay=styled.div`
position: absolute;
top: 0;
left: 0;
height: 100vh;
width: 100%;
z-index:1;
background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title=styled(motion.div)`
position: absolute;
top: 50%;
left: 50%;
right: 0;
bottom: 0;
z-index: 5; 
transform: translate(-50%,-50%);
color: ${props=>props.theme.text};
  display: flex;
flex-direction: column;
justify-content: center;
align-items: center;  

div{
    display: flex;
    flex-direction: row;
}


h1{
    font-family:"Kaushan Script";
    font-size: ${props=> props.theme.fontBig};
    text-shadow: 1px 1px 1px ${props=>props.theme.body};
    @media (max-width:30em){
      font-size: ${props=> props.theme.fontxxxl};
    }
}

h2{
    font-family:"Sirin Stencil";
    font-size: ${props=> props.theme.fontlg};
    text-shadow: 1px 1px 1px ${props=>props.theme.body};
    text-transform: capitalize;
    font-weight: 300;
    margin-top: -1.5rem;
    @media (max-width:30em){
      /* font-size: ${props=> props.theme.fontsm}; */
      margin-top: -1.5rem;
    }
}
`

const container={
  hidden:{
      opacity:0,
  },
  show:{
      opacity:1, 
      transition:{
        delayChildren:6.5,
        staggerChildren:0.2,
   }
      
},
}


const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};




const Video = () => {
  return (
    <VideoContainer>

        <DarkOverlay />

        <Title variants={container} initial="hidden" animate="show">
            <div >
                 <motion.h1 variants={item}  data-scroll data-scroll-delay="0.13" data-scroll-speed="4">W</motion.h1>
                 <motion.h1 variants={item}  data-scroll data-scroll-delay="0.09" data-scroll-speed="4">i</motion.h1>
                 <motion.h1 variants={item} data-scroll data-scroll-delay="0.06" data-scroll-speed="4">b</motion.h1>
                 <motion.h1 variants={item} data-scroll data-scroll-delay="0.04" data-scroll-speed="4">e</motion.h1>
            </div>
            <motion.h2   variants={item} data-scroll data-scroll-delay="0.04" data-scroll-speed="2">Inspire. Create. Belive</motion.h2>
        </Title>

<video src={VideoGirl} type="video/mp4" autoPlay muted loop />
        
    </VideoContainer>
  )
}

export default Video