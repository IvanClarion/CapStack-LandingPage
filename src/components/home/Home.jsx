import React from 'react'
import MockUp from '../../assets/images/mockup-screen.png'
function Home() {
  return (
    <section className='flex-1 flex mx-2 items-center justify-center' >
        <div className='home'>
        <article className='grid gap-4 text-center lg:text-start'>
            <h1 className='text-4xl'>Build Your Perfect Project Blueprint</h1>
            <span className='grid gap-2'>
            <p>CapStack is an AI-powered tool that revolutionizes how individuals and teams generate project plans.</p>
            <button className='primary-button w-full  lg:w-fit font-semibold px-5'>Start Building</button>
            </span>
        </article>
        <div className='flex justify-center items-center text-center'>
            <img src={MockUp} alt="Mockup Image" />
        </div>
        </div>
    </section>
  )
}

export default Home
