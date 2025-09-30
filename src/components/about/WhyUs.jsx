import React from 'react'
import { Sparkle,BookCopy, Files } from 'lucide-react'
function WhyUs() {
  return (
    <section className='whyUs-Layout -z-10'>
      <div className='whyUs-card'>
          <span className='span-box'/>
         <figure className='icon-bg'>
         <Sparkle className='size-11'/>
         </figure>
         <article className='flex flex-col items-center justify-center p-2'>
         <h1>Powered by Gemini</h1>
         <p className='text-sm'>CapStack is powered by 2.5 flash pro the  latest model from gemini</p>
        </article>
      </div>
      <div className='whyUs-card'>
          <span className='span-box'/>
         <figure className='icon-bg'>
         <BookCopy className='size-11'/>
         </figure>
         <article className='flex flex-col items-center justify-center p-2'>
         <h1>Auto Fetch Resources</h1>
         <p className='text-sm'>CapStack is not just for creating ideas but also supporting your ideas with auto fetching references features</p>
        </article>
      </div>
      <div className='whyUs-card'>
          <span className='span-box'/>
         <figure className='icon-bg'>
         <Files className='size-11'/>
         </figure>
         <article className='flex flex-col items-center justify-center p-2'>
         <h1>Can Convert you Ideas to Files</h1>
         <p className='text-sm'>Do you want to convert your ideas to file? No problemo amigoss!! CapStack can convert your ideas with our convert to pdf file feature. </p>
        </article>
      </div>
    </section>
  )
}

export default WhyUs
