import { useState } from 'react'
// import './App.css'
import data from './data/TextContainerData'
import Header from './Components/Header'
import Banner from './Components/Banner'
import TeaxtContainer from './Components/TeaxtContainer'
import ImageCollageContainer1 from './Components/ImageCollageCOntainer1'
import SingleVideoContainer from './Components/SingleVideoContainer'
import ImageCollageContainer2 from './Components/ImageCollageContainer2'
import ImageCollageContainer3 from './Components/ImageCollageContainer3'
import LatestJobs from './Components/LatestJobs'
import Footer from './Components/Footer'

import '../src/fonts.css';

function App() {
  const [count, setCount] = useState(0)
  console.log('In App| Data', data[0].heading)
  return (
    <div >
      <div >
        <Header></Header>
        <Banner></Banner>
        <TeaxtContainer heading={data[0].heading} description ={data[0].description}></TeaxtContainer>
        <ImageCollageContainer1></ImageCollageContainer1>
        <TeaxtContainer heading={data[1].heading} description ={data[1].description}></TeaxtContainer>
        <SingleVideoContainer></SingleVideoContainer>
        <ImageCollageContainer2></ImageCollageContainer2>
        <TeaxtContainer heading={data[2].heading} description ={data[2].description} npara ={data[2].npara}></TeaxtContainer>
        <ImageCollageContainer3></ImageCollageContainer3>
        <TeaxtContainer heading={data[3].heading} description ={data[3].description}></TeaxtContainer>
        <LatestJobs></LatestJobs>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App
