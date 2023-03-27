import GlobalStyles from "./styles/globalStyles";
import {ThemeProvider} from "styled-components";
import { dark } from "./styles/themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import  {useRef}  from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Home from "./section/Home";
import {AnimatePresence} from "framer-motion"
import About from "./section/About";
import Shop from "./section/Shop";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Marquee from "./section/Marquee";
import NewArrival from "./section/NewArrival";
import Footer from "./section/Footer";
import Loaders from "./components/Loaders"
import { useState } from "react";
import { useEffect } from "react";



function App() {
  
  const [loaded,setLoaded]=useState(false);

useEffect(()=>{
setTimeout(()=>{
setLoaded(true)
},5500)
},[])

const containerRef=useRef("");

  return (
    <>
      <GlobalStyles />

  <ThemeProvider 
  theme={dark}
  >

    <LocomotiveScrollProvider           
    options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
          >


    
    <main data-scroll-container  ref={containerRef} className="App">

      <ScrollTriggerProxy />

      <AnimatePresence>
       {loaded?null:<Loaders/>} 
      </AnimatePresence>

<AnimatePresence>
      <Home />
      <About />
      <Shop />
      <Marquee />
      <NewArrival />
      <Footer/>
</AnimatePresence>
 

    </main>   
     </LocomotiveScrollProvider>
  </ThemeProvider>


    </>
  );
}

export default App;
