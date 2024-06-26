import React from 'react'
import { Brand, CTA, Navbar } from "./components";
import { Footer, Header, WhatGPT3, Possibility, Blog, AppFeature } from "./containers";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <div className="gradient-bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <AppFeature />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App