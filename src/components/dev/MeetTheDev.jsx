import React from 'react'
import DevsSample from '../../assets/images/devs-nobg.png'
function MeetTheDev() {
  return (
    <section>
      <div className='text-center'>
        <h1 className='text-4xl'> Meet the Team</h1>
      </div>
      <div className='flex flex-col lg:flex-row relative overflow-hidden justify-center items-center gap-10'>
            <div className='devs-card'>
                <figure>
                    <img src={DevsSample} alt="" />
                    <span className='devs-span-box'/>
                </figure>
                <article >
                    <label>Cross-Platform Developer</label>
                    <p className='text-sm text-gray-200'>Ivan Dale Clarion</p>
                </article>
            </div>
        <div className='devs-card'>
                <figure>
                    <img src={DevsSample} alt="" />
                    <span className='devs-span-box'/>
                </figure>
                <article >
                    <label>Project Manager</label>
                    <p className='text-sm text-gray-200'>Nicholas Rye Laoguico</p>
                </article>
            </div>

            <div className='devs-card'>
                <figure>
                    <img src={DevsSample} alt="" />
                    <span className='devs-span-box'/>
                </figure>
                <article >
                    <label>Web Developer</label>
                    <p className='text-sm text-gray-200'>Kirk Justin Mercado</p>
                </article>
            </div>
            
           
      </div>
    </section>
  )
}

export default MeetTheDev
