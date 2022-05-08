import Link from 'next/link'
import React, { useState } from 'react'
import { Cart } from './Cart'

export const NavBar = () => {
  const [show, setShow] = useState(false)
  const toggleButton = () => {

    setShow(!show)
  }
  const Options = () => {
    return (
      < >
         <Link href='/'>
        <a >
        Home
        </a>
        </Link>
        <Link href='/product'>
        <a >
        Catálogo
        </a>
        </Link>
        <a href='#'>
          Contacto
        </a>
      </>
    )
  }
  return (
    <nav className=' md:flex  p-4 py-11 md:px-20 '>
      <div className='md:static fixed bg-white top-0 left-0 right-0 grid grid-cols-3 p-4  '>
        <div className='md:hidden col-span-2'>
          <button onClick={ () => toggleButton() } type="button">
            <img src="./burguer.svg" />
          </button>
          {/* // Here I want the enter the logo*/ }
        </div>
        <Cart />
      </div>

      { show &&
        <div className=' fixed '>
          <div className=' m-3 p-4 container w-56 h-80 bg-secondary rounded-xl'>
            <div className=' grid grid-cols-1 place-content-start gap-y-10  text-xl p-4 w-56 h-80 border-solid border-2 border-black rounded-xl'>
              <Options />
            </div>
          </div>
        </div>
      }
      <div className='container hidden md:flex  justify-evenly items-center mx-auto'>
        <Options />
        <a href='#'>
          <img src="./cart.svg" />
        </a>

      </div>
    </nav>
  )
}
