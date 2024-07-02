import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const About = () => {
  useGSAP(() => {
         
    const clipAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: '#clip',
            start: 'center center',
            end: '+=800  center',
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
        }
    })

    clipAnimation.to('-mask-clip-path', {
      width: '100vw',
        height: '100vh',
       borderRadius: '0px',
      
    })

  } , []);
    



  return (
    <div id='about' className='w-screen min-h-screen bg-gradient-to-b'>
    <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>

    <h2 className='font-general  uppercase md:text-[10px]  '>
       Welcome to our Zentry</h2>
    <div className=' text-center text-4xl uppercase leading-[0.8] md:text-[6rem]'>
    
       Disc<b>over</b> the world's<br/> l <b> a </b>rgest shared adventure 
    </div>

  <div className='about-subtext'>  
  <p>   The Game of Games begins-your life , now an epic MMORGP  </p>
   
   <p> 
  Zentry uintes every player from countless games and platforms into a single universe.
   </p>

  </div>
    </div>
      <div className='h-dvh w-screen ' id=" clip">
       < div className='mask-clip-path about-image'>
        <img src={"/img/about.webp"} alt="background"
         className='absolute size-full left-0 top-0 object-cover'
        />
       
       </div>

      </div>




</div>
  )
}

export default About