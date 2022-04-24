import React from 'react'

const Main = ({show}) => {
    console.log(show)
    return (
        <div>
            <div className='container grid grid-cols-1 md:grid-cols-2 mx-auto'>
                <div className='py-14'>
                    <h1 className='text-5xl text-center'>Da amor</h1> {/* // Here I want to change amor for many different words*/ }
                    <h1 className='text-5xl text-center'>Da crochet</h1>
                </div>
                <img className=' mx-auto p-4 m-4 object-cover w-56 h-80 rounded-3xl' src='../images/deer.jpg' />
            </div>
            <div className='container grid grid-cols-1 md:grid-cols-2 mx-auto'>
                <div className=' md:order-last py-14'>
                    <h1 className=' text-5xl content-center text-center '>Lo mas vendido</h1> 
                </div>
                <img className=' mx-auto p-4 m-4 object-cover w-56 h-80 rounded-3xl' src='../images/deer.jpg' />
            </div>
        </div>
    )
}

export default Main