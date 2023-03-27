import React from 'react'
import styled from 'styled-components'
import Logo from '../components/Logo'
import Video from '../components/Video'
import Navbar from '../components/Navbar'

const Section=styled.section`
position:relative;
min-height: 100vh;
overflow: hidden;
`

const Home = () => {
  return (
    <Section id='Home'>
      <Video   />
      <Logo />
      <Navbar />
</Section>

  )
}

export default Home