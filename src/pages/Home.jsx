import React from 'react'
import court1 from '../assets/images/court1.jpg'
import court3 from '../assets/images/court3.jpg'
import court2 from '../assets/images/court2.jpg'
import court4 from '../assets/images/court4.jpg'
import player from '../assets/images/player.png'
import icon1 from '../assets/images/icon01.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
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

            <button className='btn'>Book a Court Now</button>
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
               <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
               <p className='text_para'>Users</p>
            </div>

            <div>
              <h2 className='text-[36px] leading-[56px] lg:text-[30px] lg:leading-[54px] font-[700]
               text-headingColor'>100%</h2>
               <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
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

    {/*hero section end*/}

    <section>
      <div className='container'>
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>
            Our Services
          </h2>
          <p className='text_para text-center'>
            What we Offer
          </p>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px]
         lg:mt-[55px]'>
           <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
                <img src={icon1}></img>
            </div>

            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>Find a Court</h2>
              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                Find a court near you.
              </p>

              <Link to = '/courts' className='w-[44px] h-[44px] rounded-full border border-solid border-
              [#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                < BsArrowRight className='group-hover:text-white w-6 h-5 '/>
              </Link>
            </div>
           </div>
         </div>


      </div>
    </section>
    </>
  )
}

export default Home