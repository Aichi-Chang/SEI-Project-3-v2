import React from 'react'
import UseAxios from '../commonComponents/UseAxios'

import CurrentCard from './currentCard'


const CurrentListing = () => {
  const data = UseAxios('/api/currents')
  return ( 
    <div className='flex flex-wrap justify-around mr6 ml6 mb5'>
      <h1 className="helvetica b f1 ml3 mt6 mb5 tc w-100">Current top tips</h1>
      {data.map((current, index) => {
        return <CurrentCard key={index} article={current} />
      })}
    </div>


  )
}


export default CurrentListing
