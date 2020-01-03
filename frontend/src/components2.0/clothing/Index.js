import React from 'react'
import UseAxios from '../commonComponents/UseAxios'
import ClothingCard from './ClothingCard'
// why need to insert bulma?????
import 'bulma'

const ClothesListing = () => {
  const data = UseAxios('/api/clothing')

  return (
    <div className='flex flex-wrap justify-around mr6 ml6 mb5'>
      <h1 className="helvetica b f1 ml3 mt6 mb5 tc w-100">Browsing to Swap?</h1>
      {data.map((clothing, index) => {
        return <ClothingCard key={index} item={clothing} />
      })}
    </div>
  )
}
export default ClothesListing