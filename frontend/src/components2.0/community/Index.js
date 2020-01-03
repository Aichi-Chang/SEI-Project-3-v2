import React from 'react'
import UseAxios from '../commonComponents/UseAxios'

import CommunityCard from './CommunityCard'

const CommunityListing = () => {
  const data = UseAxios('/api/communities')
  return ( 
    <div className='flex flex-wrap justify-around mr6 ml6 mb5'>
      <h1 className="helvetica b f1 ml3 mt6 mb5 tc w-100">After cool places to check out?</h1>
      {data.map((community, index) => {
        return <CommunityCard key={index} article={community} />
      })}
    </div>


  )
}
export default CommunityListing