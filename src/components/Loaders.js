import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion"



const Section=styled(motion.div)`
height: 100vh;
width: 100vw;
background-color: ${prop=>prop.theme.body};

touch-action: none;
overflow: hidden;


z-index: 10;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
`
const Container=styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
width: 100%;
width: fit-content;
z-index: 6;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


a{
    width: 100%;
    display: flex;
    align-items: flex-end;
}

svg{
    width: 12rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g{
        path{
            stroke: white;
        }
    }
}
`

const Text=styled(motion.span)`
font-size:${props=>props.theme.fontxl};
color: ${props=>props.theme.text};
padding-bottom: 0.5rem;
`

const pathVariants={
    hidden:{
        opacity:0,
        pathLength:0,
    },
    visible:{
        opacity:1,
        pathLength:1,
   
    transition:{
        duration:2.5,
        delay:1,
        ease:"easeInOut"
    }, 
},
}
const textVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
  
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        yoyo:Infinity
      },
    },
  };


const Loaders = () => {
  return (
    <Section 
    initial={{y:"0", opacity:1}}
    animate={{y:"100%", opacity:0.6}}
    transition={{ease:"easeInOut",delay:3.5,duration:2}}>
        <Container>

        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        enableBackground="new 0 0 24 24" 
        height="48px" 
        viewBox="0 0 24 24" 
        width="48px" 
        fill="none" >
            <g>
                <motion.path  
                variants={pathVariants}     
                initial="hidden"
              animate="visible"
        d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z" />
        </g>
        </svg>

<Text 
variants={textVariants} initial="hidden" animate="visible"
>Wibe Studio</Text>
    </Container>

    </Section>
  )
}

export default Loaders