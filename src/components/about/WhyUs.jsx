import React from 'react'
import { Sparkle,BookCopy, Files } from 'lucide-react'
import { motion } from 'motion/react'
import { animate } from 'motion'

function WhyUs() {
  
  return (
    <motion.section className='whyUs-Layout -z-10'
    
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      transition={{duration:0.5}}
    >
      <div className='whyUs-card'>
          <span className='span-box'/>
         <motion.figure className='icon-bg'
          initial={{opacity:0, scale:0.8}}
          whileInView={{opacity:1, scale:1}}
          viewport={{once:true}}
          transition={{duration:0.5,delay:0.6,ease:'easeInOut'}}
         >
         <Sparkle className='size-11'/>
         </motion.figure>
         <motion.article className='flex flex-col items-center justify-center p-2'
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.5,delay:0.3}}
         >
         <h1>Powered by Gemini</h1>
         <p className='text-sm'>CapStack is powered by 2.5 flash pro the  latest model from gemini</p>
        </motion.article>
      </div>
      <div className='whyUs-card'>
          <span className='span-box'/>
         <motion.figure className='icon-bg'
          initial={{opacity:0, scale:0.8}}
          whileInView={{opacity:1, scale:1}}
          viewport={{once:true}}
          transition={{duration:0.5,delay:0.6,ease:'easeInOut'}}
         >
         <BookCopy className='size-11'/>
         </motion.figure>
         <motion.article className='flex flex-col items-center justify-center p-2'
         initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.5,delay:0.3}}
         >
         <h1>Auto Fetch Resources</h1>
         <p className='text-sm'>CapStack is not just for creating ideas but also supporting your ideas with auto fetching references features</p>
        </motion.article>
      </div>
      <div className='whyUs-card'>
          <span className='span-box'/>
         <motion.figure className='icon-bg'
          initial={{opacity:0, scale:0.8}}
          whileInView={{opacity:1, scale:1}}
          viewport={{once:true}}
          transition={{duration:0.5,delay:0.6,ease:'easeInOut'}}
         >
         <Files className='size-11'/>
         </motion.figure>
         <motion.article className='flex flex-col items-center justify-center p-2'
         initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.5,delay:0.3}}
         >
         <h1>Can Convert you Ideas to Files</h1>
         <p className='text-sm'>Do you want to convert your ideas to file? No problemo amigoss!! CapStack can convert your ideas with our convert to pdf file feature. </p>
        </motion.article>
      </div>
    </motion.section>
  )
}

export default WhyUs
