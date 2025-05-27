import aboutImg from '../assets/about.jpg'
import { ABOUT_TEXT, ABOUT_TEXT2 } from '../constants'
import {motion} from 'framer-motion';

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">About
      <span className="text-neutral-500"> Me</span>
      </h1>
     
      <div className="flex flex-wrap">
        <motion.div
           whileInView={{opacity: 1, x: 0}}
           initial={{opacity: 0, x: -100}}
           transition={{duration: 0.5}}
           className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className='rounded-2xl w-90 h-90' src={aboutImg} alt="about" />
            </div>
        </motion.div>
        <motion.div 
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration: 0.5}}
          className='w-full lg:w-1/2 flex items-center justify-center px-4'>
            <div className='flex flex-col items-center justify-center text-center lg:items-start lg:text-left max-w-xl'>
              <p className='my-2 py-6'>{ABOUT_TEXT}</p>
              <p className='my-2 py-6'>{ABOUT_TEXT2}</p>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
