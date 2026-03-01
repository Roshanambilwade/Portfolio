import React from 'react'
import { motion } from 'framer-motion'
import { assets, aboutInfo } from '../assets/assets'

const About = () => {
  return (
    <motion.div
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1,y:0}}
      transition={{duration:0.6,ease:'easeInOut'}}
      viewport={{once:true}}
      id='about'
      className='py-20 bg-dark-200'
    >

      <div className='container mx-auto px-6'>

        <h2 className='text-3xl font-bold text-center mb-4'>
          About <span className='text-purple'>Me</span>
        </h2>

        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
          Get to know more about my background and passion
        </p>

        <div className='flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto'>

          {/* Image */}
          <div className='md:w-1/2 rounded-2xl overflow-hidden'>
            <motion.img
              initial={{opacity:0,y:50}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:0.9}}
              className='w-full h-full object-cover'
              src={assets.profileImg}
              alt="profile"
            />
          </div>

          {/* Content */}
          <motion.div className='md:w-1/2'>

            <div className='rounded-2xl p-8'>

              <h3 className='text-2xl font-semibold mb-6'>
                My Journey
              </h3>

              <p className='text-gray-300 mb-6'>
                I am Roshan Ambilwade, an Information Technology student and MERN Stack Developer from Nashik. I specialize in building modern web applications using React, Node.js, MongoDB, JavaScript, and SQL.

                I have built real-world projects including a Spotify Clone, hotel booking website. My goal is to become a Software Engineer and contribute to impactful applications.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {aboutInfo.map((data, index) => (

                  <div
                    key={index}
                    className='bg-dark-100 rounded-2xl p-6 hover:-translate-y-2 transition duration-300'
                  >

                    <data.icon className='text-purple text-4xl mb-4'/>

                    <h3 className='text-xl font-semibold mb-2'>
                      {data.title}
                    </h3>

                    <p className='text-gray-400'>
                      {data.description}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </motion.div>
  )
}

export default About