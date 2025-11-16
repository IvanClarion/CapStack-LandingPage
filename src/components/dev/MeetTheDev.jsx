import React from 'react'
import DevsSample from '../../assets/images/devs-nobg.png'
import Ivan from '../../assets/images/ivan.png'
import Rye from '../../assets/images/ryes.png'
import Kirk from '../../assets/images/kirk2.png'
import { Link } from 'react-router'
import { Code, FolderKanban, MonitorSmartphone,Palette } from 'lucide-react'
import { motion } from 'motion/react'
import Homer from '../../assets/images/homer2.0.png'
function MeetTheDev() {
  return (
    <section>
      <div className='text-center'>
        <h1 className='text-4xl'> Meet the Team</h1>
      </div>

      {/* Horizontal scroll + snap on small screens; centered row on lg+ */}
      <div
        className='flex flex-row gap-5 lg:gap-7
                   w-full
                   items-stretch
                   overflow-x-auto lg:overflow-visible
                   snap-x snap-mandatory lg:snap-none
                   scroll-smooth
                   justify-start lg:justify-center
                    lg:px-0 lg:mx-auto'
        aria-label='Meet the Team scroller'
      >
        <motion.div className='devs-card shrink-0 snap-center'
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, ease:'easeInOut'}}
        >
          <figure>
            <img src={Ivan} alt="" />
            <span className='devs-span-box'>
              <Link className='w-full flex justify-end p-2'>
                <div className='p-2 bg-secondaryBlack/60 rounded-full w-fit backdrop-blur-xl backdrop-saturate-[200%] flex justify-end'>
                  <MonitorSmartphone/>
                </div>
              </Link>
            </span>
          </figure>
          <article>
            <label>App Developer</label>
            <p className='text-sm text-gray-200'>Ivan Dale Clarion</p>
          </article>
        </motion.div>

        <motion.div className='devs-card shrink-0 snap-center'
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, ease:'easeInOut', delay:0.3}}
        >
          <figure>
            <img src={Rye} alt="" />
            <span className='devs-span-box'>
              <Link className='w-full flex justify-end p-2'>
                <div className='p-2 bg-secondaryBlack/60 rounded-full w-fit backdrop-blur-xl backdrop-saturate-[200%] flex justify-end'>
                  <FolderKanban/>
                </div>
              </Link>
            </span>
          </figure>
          <article>
            <label>Project Manager</label>
            <p className='text-sm text-gray-200'>Nicholas Rye Lao Guico</p>
          </article>
        </motion.div>

        <motion.div className='devs-card shrink-0 snap-center'
        
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, ease:'easeInOut', delay:0.6}}
        >
          <figure>
            <img src={Kirk} alt=""  />
            <span className='devs-span-box'>
              <Link className='w-full flex justify-end p-2'>
                <div className='p-2 bg-secondaryBlack/60 rounded-full w-fit backdrop-blur-xl backdrop-saturate-[200%] flex justify-end'>
                  <Code/>
                </div>
              </Link>
            </span>
          </figure>
          <article>
            <label>Web Developer</label>
            <p className='text-sm text-gray-200'>Kirk Justin Mercado</p>
          </article>
        </motion.div>

        <motion.div className='devs-card shrink-0 snap-center'
        
        initial={{opacity:0, y:20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:1, ease:'easeInOut', delay:0.9}}
        >
          <figure>
            <img src={Homer} alt=""  />
            <span className='devs-span-box'>
              <Link className='w-full flex justify-end p-2'>
                <div className='p-2 bg-secondaryBlack/60 rounded-full w-fit backdrop-blur-xl backdrop-saturate-[200%] flex justify-end'>
                  <Palette/>
                </div>
              </Link>
            </span>
          </figure>
          <article>
            <label>UI/UX Designer</label>
            <p className='text-sm text-gray-200'>Homer Benedict Hambre</p>
          </article>
        </motion.div>
      </div>

      
      
    </section>
  )
}

export default MeetTheDev