import React from 'react'
import court1 from '../assets/images/court1.jpg'
import court3 from '../assets/images/court3.jpg'
import court2 from '../assets/images/court2.jpg'
import court4 from '../assets/images/court4.jpg'
import player from '../assets/images/player.png'
const Home = () => {
  return (
    <>
    {/* hero section */}
    <section className='hero_section pt-[55px] 2xl:h-[800px]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
          {/* hero content */}
          <div>
          <div className='lg:w-[570px]'>
            <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[55px] md:leading-[70px]'>
            Super Easy Badminton Court Bookings Await!
            </h1>
            <p className='text_para'>
           
            </p>

            <button className='btn'>Book Court Now</button>
          </div>
          <div className='mt-[30px] lg:mt-[30px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>

            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[30px] lg:leading-[54px] font-[700]
               text-headingColor'>300+</h2>
               <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
               <p className='text_para'>Courts</p>
            </div>

            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[30px] lg:leading-[54px] font-[700]
               text-headingColor'>300+</h2>
               <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
               <p className='text_para'>Users</p>
            </div>

            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[30px] lg:leading-[54px] font-[700]
               text-headingColor'>100%</h2>
               <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
               <p className='text_para'>Experience</p>
            </div>


          </div>
          </div>

        <div className='flex gap-[30px] justify-end '>
          <div>
            <img className='w-full' src={court4} alt=""/>
          </div>
        </div>

        </div>

        
      </div>
    </section>
    </>
  )
}

export default Home