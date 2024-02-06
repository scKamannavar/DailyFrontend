import { useState } from 'react'
// import './App.css'
import Layout from './Components/Layout'
import RightContainer from './Components/RightContainer'
import LeftContainer from './Components/LeftContainer'
// import RightCont from './Components/RightContainer'

function App() {

  return (
    <>
      <Layout></Layout>
      {/* <Layout2></Layout2> */}
      <RightContainer></RightContainer>
      <LeftContainer></LeftContainer>
    </>
  )
}

export default App
