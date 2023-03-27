import React from 'react'
import styled from 'styled-components'
import {motion} from "framer-motion"
import { useRef,useLayoutEffect } from 'react'

import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger';

import image1 from"../assets/Images/1.webp";
import image2 from"../assets/Images/2.webp";
import image3 from"../assets/Images/3.webp";
import image4 from"../assets/Images/4.webp";
import image5 from"../assets/Images/5.webp";
import image6 from"../assets/Images/6.webp";
import image7 from"../assets/Images/7.webp";
import image8 from"../assets/Images/8.webp";
import image9 from"../assets/Images/9.webp";
import image10 from"../assets/Images/10.webp";

const Section=styled.section`
min-height: 100vh;
height: auto;
width: 100%;
  margin: 0 auto;
  overflow: hidden;
position: relative;


display: flex;
justify-content: flex-start;
align-items: flex-start;
`

const Left=styled.div`
width: 35%;
background-color: ${prop=>prop.theme.body};
color: ${prop=>prop.theme.text};
min-height: 100vh;
z-index: 10;
position: fixed;
left: 0;

  display: flex;
  justify-content: center;
  align-items: center;


  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }
`
const Title=styled.h1`
position: absolute;
top: 1.5rem;
left: 10%;
font-size: ${prop=>prop.theme.fontxxxl};
font-family: "Kaushan Script";
font-weight: 300;
z-index: 11;
text-shadow: 5px 5px 5px ${prop=>prop.theme.body};
white-space: nowrap;
`

const Right=styled.div`
position: absolute;
/* width: 65%; */
background-color: ${(props) => props.theme.grey};
left: 35%;
padding-left: 30%;
min-height: 100vh;

display: flex;
justify-content: flex-start;
align-items: center;

`

const Shop = () => {

//scrollTriggerProxy.js file plus + yaha dedhi 
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    console.log(pinWrapWidth)
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        //we have to increse scrolling height of this section same as the scrolling height
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
        x: -pinWrapWidth,

        ease: "none",
      });
      ScrollTrigger.refresh();
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  //yaha samma for horizontal scroll with those useRef hook

  const Item=styled(motion.div)`

  display: inline-block;
  width: 20rem;
  margin-right: 6rem;

  img{
    height: auto;
    width: 100%;
    cursor: pointer;
  }
  h1{
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }
  `


  const Product=({images, title=""})=>{
    return(
   <Item
   initial={{filter:"grayscale(100%)"}}
   whileInView={{filter:"grayscale(0%)"}}
   transition={{duration:0.5}}
   viewport={{once:false, amount:"all"}}
   >
    <img src={images} alt={title} />
    <h1>{title}</h1>
   </Item>
    )

  }

  return (
    <Section ref={ref} id="Shop">
<Left>
<Title>New Collection</Title>
   <p>The brand new collection is currently being developed in USA. 
We create our products using best quality material, including the use of some of the pure fabrics to make our products. 
All products are made using the best materials, from the finest cotton to the finest fabrics.
<br /><br />
We have lots of different clothing options like shoes, jackets and dresses. 
Not only clothes but we also provide unique Jewellery as well. 
It is great for us to carry our new clothes all around the country and look different.</p>
</Left>
<Right data-scroll ref={Horizontalref}>

<Product images={image1} title="Men's Basics" />
<Product images={image2} title={"Tops"} />
<Product images={image3} title={"Sweatshirts"} />
<Product images={image4} title={"Ethnic Wear"} />
<Product images={image5} title={"Blazers"} />
<Product images={image6} title={"Suits"} />
<Product images={image7} title={"Antiques"} />
<Product images={image8} title={"Jewellery"} />
<Product images={image9} title={"Watches"} />
<Product images={image10} title={"Special Edition"} />



</Right>


    </Section>

  )
}

export default Shop