import React, {useRef} from 'react'
import Button from './Button';
import {TiLocationArrow} from 'react-icons/ti';
function Navbar() {

    const navContainerRef = useRef(null);
    <div ref={navContainerRef} className='fixed inset-x-0 top-4  z-50 
     h-16 border-none transition-all duration-700 sm:insect-x-6'>
     <header className='absolute top-1/2  w-full 
     -translate-y-1/2 '>

  <nav className='flex items-center justify-between size-full
  p-4
  '>


    {/* left side of the navbar */}

  <div className='flext items-center gap-7'>
    <img src="img/logo.png" alt="logo" className='w-10' />
    <Button
    variant='secondary'
    containerClass='bg-blue-50
     md:flex hidden items-center gap-1 justify-center'
    id='product-button'
    title='Products'
    rightIcon={<TiLocationArrow />}
    >
       
    </Button>

  </div>



    {/* right side of the navbar */}
    
  <div className='flext items-center gap-7'>
   



  </div>


  </nav>





     </header>


    </div>
  
}

export default Navbar