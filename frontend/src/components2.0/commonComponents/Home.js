import React from 'react'
import LazyHero from 'react-lazy-hero'



const Hero = () => {
  return <div>
    <LazyHero
      imageSrc="https://66.media.tumblr.com/c26e779325c7156ca638d22b5e549a5d/tumblr_nvq99w3T9l1qb4hiyo1_1280.jpg" 
      parallaxOffset={100} 
      opacity={0.7}
      minHeight={'120vh'}
      style={{ overflow: 'hidden' }}>
      <h1 className='garamond f-headline flex items-center justify-center mt6 mb2'>The Vault</h1>
      <p className='f3 flex justify-center'>A space between art and life</p>
    </LazyHero>
    
    
    <div className='avenir f5 flex flex-column items-center bg-near-white'>

      <h1 className='silver avenir f1 mt5 flex items-center justify-center'>About the team</h1>

      <div className='w-50 pa3 mr2 mb3 tc'>
        <h2 className='f3'>Lucy Casey</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet ac tortor ac gravida. Proin egestas a nisi non molestie. Integer quis ante magna. Donec vitae convallis turpis, eu posuere ante.</p>
      </div>

      <div className='w-50 pa3 mr2 mb3 tc'>
        <h2 className='f3'>Aichi Chang</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet ac tortor ac gravida. Proin egestas a nisi non molestie. Integer quis ante magna. Donec vitae convallis turpis, eu posuere ante.</p>
      </div>

      <div className='w-50 pa3 mr2 mb3 tc'>
        <h2 className='f3'>Soina Choudhury</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet ac tortor ac gravida. Proin egestas a nisi non molestie. Integer quis ante magna. Donec vitae convallis turpis, eu posuere ante.</p>
      </div>

      <div className='w-50 pa3 mr2 mb5 tc'>
        <h2 className='f3'>Sarah Wood</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet ac tortor ac gravida. Proin egestas a nisi non molestie. Integer quis ante magna. Donec vitae convallis turpis, eu posuere ante.</p>
      </div>

    </div>
  </div>
}

export default Hero