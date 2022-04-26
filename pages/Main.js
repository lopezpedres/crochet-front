import React from 'react'
import Carrosuel from './Components/Main/Carrosuel'
import Form from './Components/Main/Form'
const Main = () => {
    return (
        <div >
            <div className='container grid grid-cols-1 md:grid-cols-2 mx-auto  py-6 '>
                <div className='md:p-36'>
                    <h1 className='text-5xl text-center'>Da amor</h1> {/* // Here I want to change amor for many different words*/ }
                    <h1 className='text-6xl lg:text-7xl md:text-6xl text-center'>Da crochet</h1>
                </div>
                <img className=' mx-auto p-4 m-4 object-none w-72 h-96 rounded-3xl' src='../images/bunny.png' />
            </div>
            <div className='container md:px-4 md:py-6  grid grid-cols-1 md:grid-cols-3 mx-auto'>
                <div className=' md:order-last py-14 col-span-1'>
                    <p className=' text-5xl lg:text-7xl md:text-5xl content-center text-center '>Lo más vendido</p>
                </div>
                <div className="col-span-2">
                <Carrosuel />
                </div>
            </div>
            <Form />
        </div>
    )
}

export default Main