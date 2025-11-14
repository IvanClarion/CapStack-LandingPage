import React from 'react'
import Step1 from '../../assets/images/iphone-x-login.png'
import Step2 from '../../assets/images/iphone-x-step2.png'
import Step3 from '../../assets/images/iphone-x-main.png'
import { motion } from 'motion/react'
function HowToGetStarted() {
  return (
    <section className="grid -z-10 gap-5">
      
      <div className="flex items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          How to Get Started
        </h1>
      </div>

    
      <div className="grid grid-cols-1 max-h-[500px] lg:grid-cols-2 gap-3 items-stretch">
        <article className="htgs-card h-full"
        
        >
          <motion.div className="flex items-center gap-3"
          initial={{opacity:0, x:-20}}
          whileInView={{opacity:1, x:0}}
          viewport={{once:true}}
          transition={{duration:0.8 , delay:0.3}}
          >
            <span className="step-icon">1</span>
            <h1>Register to CapStack</h1>
          </motion.div>
          <motion.img src={Step1} alt="Step 1 - Login" className="w-full h-auto object-contain" 
          initial={{y:100}}
          whileInView={{y:0}}
          transition={{duration:0.8, ease:'easeOut'}}
          />
        </article>
      
        {/* Make this card appear last on small screens, but keep its large-screen position */}
        <article className="htgs-card lg:row-span-2 h-full order-last lg:order-none">
          <motion.div className="flex items-center gap-3"
          initial={{opacity:0, x:-20}}
          whileInView={{opacity:1, x:0}}
          viewport={{once:true}}
          transition={{duration:0.8 , delay:0.3}}
          >
            <span className="step-icon">3</span>
            <h1>Review the AI Response</h1>
          </motion.div>
          <motion.img src={Step3} alt="Step 3 - Review Response" className="w-full h-auto object-contain" 
           initial={{y:100}}
          whileInView={{y:0}}
          transition={{duration:0.8, ease:'easeOut'}}
          />
        </article>
        <article className="htgs-card">
          <motion.div className="flex items-center gap-3"
          initial={{opacity:0, x:-20}}
          whileInView={{opacity:1, x:0}}
          viewport={{once:true}}
          transition={{duration:0.8 , delay:0.3}}
          >
            <span className="step-icon">2</span>
            <h1>Answer the Survey</h1>
          </motion.div>
          <motion.img src={Step2} alt="Step 2 - Survey" className="w-full h-auto object-contain" 
           initial={{y:100}}
          whileInView={{y:0}}
          transition={{duration:0.8, ease:'easeOut'}}
          />
        </article>
      </div>
    </section>
  )
}

export default HowToGetStarted