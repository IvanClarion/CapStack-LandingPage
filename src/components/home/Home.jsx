import React from 'react'
import MockUp from '../../assets/images/mockup-screen.png'
import { Link } from 'react-router'
import { motion } from 'motion/react'
function Home() {
  return (
    <motion.section className='flex-1 flex mx-2 items-center justify-center' 
    initial={{opacity:0, y:10}}
    animate={{opacity:1, y:0}}
    transition={{duration:0.5}}
    >
        <div className='home'>
        <motion.article className='grid gap-4 text-center lg:text-start'
        initial={{opacity:0, y:20}}
        animate={{opacity:1 , y:0}}
        transition={{duration:0.8, delay:0.8}}
        >
            <h1 className='text-4xl'>Build Your Perfect Project Blueprint</h1>
            <span className='grid gap-2'>
            <p>CapStack is an AI-powered tool that revolutionizes how individuals and teams generate project plans.</p>
            <Link  to='https://capstack.netlify.app'>
            <button className='primary-button w-full  lg:w-fit font-semibold px-5'>Start Building</button>
            </Link>
            </span>
        </motion.article>
        <motion.div className='flex justify-center items-center text-center'
        initial={{x:-20,opacity:0 }}
        animate={{x:0, opacity:1}}
        transition={{duration:0.8,delay:0.8}}
        >
            <img src={MockUp} alt="Mockup Image" />
        </motion.div>
        </div>
    </motion.section>
  )
}

export default Home
