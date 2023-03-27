import React from 'react'
import styled from "styled-components"

import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useRef,useLayoutEffect } from 'react'

import img1 from "../assets/Images/11.webp"
import img2 from "../assets/Images/12.webp"
import img3 from "../assets/Images/13.webp"
import img4 from "../assets/Images/14.webp"

const Section=styled.div`
position: relative;
min-height: 100vh;
width: 100%;
margin: 0 auto;
/* background-color: yellow; */

display: flex;
justify-content: center;
 align-items: center;
`
const Overlay=styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
height: 90vh;
width: 30vw;
/* background-color: aliceblue; */
z-index: 11;
box-shadow: 0 0 0 3vw ${prop=>prop.theme.text};
border: 3px solid ${props=>props.theme.body};
`


const Title=styled.h1`
position: absolute;
top: 1.5rem;
left: 5%;
font-size: ${prop=>prop.theme.fontxxxl};
font-family: "Kaushan Script";
font-weight: 300;
z-index: 12;
text-shadow: 2px 2px 2px ${prop=>prop.theme.body};
white-space: nowrap;
`

const Text=styled.div`
width: 20%;
position: absolute;
top: 0;
right: 0;
padding: 2rem;
font-size: ${prop=>prop.theme.fontlg};
color:${prop=>prop.theme.body};
z-index: 11;
`

const Item=styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 5rem 0;

img{
  height: auto;
  width: 100%;
  z-index: 5;
}
`
const Container=styled.div`
position: absolute;
top: 0;
left: 50%;
transform: translate(-50%,0);
height: auto;
width: 25vw;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`


const Product=({images, title=""})=>{
  return(
 <Item>
  <img src={images} alt={title} />
  <h2>{title}</h2>
 </Item>
  )

}



const NewArrival = () => {

  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = ScrollingRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `bottom+=100% top-=100%`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        ease: "none",
      });

      t1.fromTo(scrollingElement,
        {
          y:"0"
        } ,{
          y:"-100%",
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end:'bottom top',
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="New-arrival">
      <Overlay/>
    <Title data-scroll data-scroll-direction="horizontal" data-scroll-speed="-2">
    New Arrivals
    </Title>


<Text 
 data-scroll data-scroll-sticky data-scroll-speed="-2"
 >
  There is new collection available for cool clothes in all sizes. 
 This collection is a great way to find a new look for you. 
 It offers a variety of cool apparel styles to fit your taste, while you can also find some cool clothes that you can wear everyday.
 <br /><br />
 The first line of clothing you will see on this collection is for men. 
 The collection also includes three new styles for women.
 <br /><br />
 Give it a try and experience a new look.

</Text>

<Container  ref={ScrollingRef}>

<Product images={img1} title="Men's Basics" />
<Product images={img2} title={"Tops"} />
<Product images={img3} title={"Sweatshirts"} />
<Product images={img4} title={"Ethnic Wear"} />

</Container>

    </Section>
  )
}

export default NewArrival