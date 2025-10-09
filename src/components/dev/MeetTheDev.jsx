import React from 'react'
import DevsSample from '../../assets/images/devs-nobg.png'
import Ivan from '../../assets/images/ivan.png'
import Rye from '../../assets/images/ryes.png'
import { Link } from 'react-router'
import { Linkedin } from 'lucide-react'

function MeetTheDev() {
  return (
    <section>
      <div className='text-center'>
        <h1 className='text-4xl'> Meet the Team</h1>
      </div>

      {/* Horizontal scroll + snap on small screens; centered row on lg+ */}
      <div
        className='flex flex-row gap-5 lg:gap-10
                   w-full
                   overflow-x-auto lg:overflow-visible
                   snap-x snap-mandatory lg:snap-none
                   scroll-smooth
                   justify-start lg:justify-center
                    lg:px-0 lg:mx-auto'
        aria-label='Meet the Team scroller'
      >
        <div className='devs-card shrink-0 snap-center'>
          <figure>
            <img src={Ivan} alt="" />
            <span className='devs-span-box'>
              <Link className='w-full flex justify-end p-2'>
                <div className='p-2 bg-secondaryBlack/60 rounded-full w-fit backdrop-blur-xl backdrop-saturate-[200%] flex justify-end'>
                  <Linkedin/>
                </div>
              </Link>
            </span>
          </figure>
          <article>
            <label>Cross-Platform Developer</label>
            <p className='text-sm text-gray-200'>Ivan Dale Clarion</p>
          </article>
        </div>

        <div className='devs-card shrink-0 snap-center'>
          <figure>
            <img src={Rye} alt="" />
            <span className='devs-span-box'>
              <Link className='w-full flex justify-end p-2'>
                <div className='p-2 bg-secondaryBlack/60 rounded-full w-fit backdrop-blur-xl backdrop-saturate-[200%] flex justify-end'>
                  <Linkedin/>
                </div>
              </Link>
            </span>
          </figure>
          <article>
            <label>Project Manager</label>
            <p className='text-sm text-gray-200'>Nicholas Rye Laoguico</p>
          </article>
        </div>

        <div className='devs-card shrink-0 snap-center'>
          <figure>
            <img src={Ivan} alt="" />
            <span className='devs-span-box'>
              <Link className='w-full flex justify-end p-2'>
                <div className='p-2 bg-secondaryBlack/60 rounded-full w-fit backdrop-blur-xl backdrop-saturate-[200%] flex justify-end'>
                  <Linkedin/>
                </div>
              </Link>
            </span>
          </figure>
          <article>
            <label>Web Developer</label>
            <p className='text-sm text-gray-200'>Kirk Justin Mercado</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default MeetTheDev