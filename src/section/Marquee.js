import React from 'react'
import styled from 'styled-components'

const Section=styled.div`
width: 80vw;
min-height: 100vh;
margin: 0 auto;

display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`
const Container=styled.div`
  min-height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
`

const Banner=styled.h1`
font-size: ${props=>props.theme.fontxxxl};
color: ${props=>props.theme.text};
white-space: nowrap;
font-family: "Kaushan Script";
line-height: 1;
text-transform: uppercase;

span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem 2rem;
    
  }
`





const Marquee = () => {
  return (
    <Section >
        <Container id='up'>
            <Banner>
                <span 
                data-scroll data-scroll-direction="horizontal" 
                data-scroll-speed="8"
            data-scroll-target="#up">
              Fashion is an armour
              </span>
            </Banner>
            <Banner 
         data-scroll data-scroll-speed="-2" data-scroll-target="#up">
                <span             data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-6"
            data-scroll-target="#up">to survive everyday life</span>
            </Banner>
            <Banner  >
                <span
                   data-scroll
                   data-scroll-direction="horizontal"
                   data-scroll-speed="6"
                   data-scroll-target="#up">One is never over-dressed</span>
            </Banner>
            <Banner>
                <span  data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-4"
            data-scroll-target="#up"> or under-dressed with </span>
            </Banner>
            <Banner         
             data-scroll data-scroll-speed="6" data-scroll-target="#up">
                <span              data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="6"
            data-scroll-target="#up"> a Little Black Dress</span>
            </Banner>
        </Container>
    </Section>
  )
}

export default Marquee