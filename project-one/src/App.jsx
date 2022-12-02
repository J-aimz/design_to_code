import { useState } from 'react'


import { Brand, Cta, NavBar} from './components'
import { Footer, Blog, Possibility, Features, WhatGBT3, Header } from './containers'

import './App.css'

function App() {

  return (
    <div className="App">
      <div className='gradient__bg'>
        {/* <NavBar /> */}
        <Header />
      </div>
      <Brand />
      <WhatGBT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
     
    </div>
  )
}

export default App
