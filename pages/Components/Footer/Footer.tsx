import React from 'react'
import Info from './Info'
import Newsletter from './Newsletter'
import Social from './Social'

export const Footer = () => {
  return (
    
        <div className='container grid grid-cols-1 md:grid-cols-3 mx-auto  my-6 '>
            <div className=' block border-t-4 text-center md:border-r-4 md:border-t-0'>
                <Newsletter/>

            </div>
            <div className='border-t-4 text-center md:border-r-4 md:border-t-0'>
                <Info/>
            </div>
            <div className='border-t-4 text-center md:border-0'>
                <Social/>
            </div>
        </div>
    
  )
}
