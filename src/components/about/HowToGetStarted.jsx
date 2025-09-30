import React from 'react'
import Step1 from '../../assets/images/iphone-x-login.png'
import Step2 from '../../assets/images/iphone-x-step2.png'
import Step3 from '../../assets/images/iphone-x-main.png'

function HowToGetStarted() {
  return (
    <section className="grid -z-10 gap-5">
      
      <div className="flex items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          How to Get Started
        </h1>
      </div>

    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch">
        <article className="htgs-card max-h-[250px]">
          <div className="flex items-center gap-3">
            <span className="step-icon">1</span>
            <h1>Register to CapStack</h1>
          </div>
          <img src={Step1} alt="Step 1 - Login" className="w-full h-auto object-contain" />
        </article>

        <article className="htgs-card lg:row-span-2 h-full">
          <div className="flex items-center gap-3">
            <span className="step-icon">3</span>
            <h1>Review the AI Response</h1>
          </div>
          <img src={Step3} alt="Step 3 - Review Response" className="w-full h-auto object-contain" />
        </article>
        <article className="htgs-card max-h-[250px]">
          <div className="flex items-center gap-3">
            <span className="step-icon">2</span>
            <h1>Answer the Survey</h1>
          </div>
          <img src={Step2} alt="Step 2 - Survey" className="w-full h-auto object-contain" />
        </article>
      </div>
    </section>
  )
}

export default HowToGetStarted
