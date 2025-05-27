import { PROJECTS } from "../constants"
import {animate, motion} from 'framer-motion';

const Projects = () => {
   

  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
             whileInView={{opacity: 1, y:0}}
             initial={{opacity: 0, y:-100}}
             transition={{duration: 0.5}}
            className="my-20 text-center text-4xl">Projects
        </motion.h1>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="mb-8 flex flex-wrap lg:justify-evenly">
                    <motion.div 
                         whileInView={{opacity: 1, x:0}}
                         initial={{opacity: 0, x:-100}}
                         transition={{duration: 1}}
                        className="w-full lg:w-1/4">
                        <img src={project.image} alt={project.title} width={250} height={250} className="mb-6 rounded"/>
                    </motion.div>
                    <motion.div 
                         whileInView={{opacity: 1, x:0}}
                         initial={{opacity: 0, x:100}}
                         transition={{duration: 1}}
                        className="flex flex-wrap w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-3 font-semibold">{project.title}
                            {/* {project.title === "Evaluating Post hoc Explanation Methods for Model Training Strategies" && (
                                <a className="mx-6 font-extrabold text-purple-900" href="https://chatapp-t58c.onrender.com/">Checkout Paper</a>
                            )} */}
                            {project.title === "Real-time Chat Application" && (
                                <a className="mx-6 font-extrabold text-purple-900" href="https://chatapp-t58c.onrender.com/">Demo</a>
                            )}
                        </h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>

                        {project.technologies.map((technology, index) => (
                            <span key={index} className="h-[28px] mr-2 mt-4 rounded bg-neutral-900 px-2 text-small font-medium text-purple-900">{technology}</span>
                        ))}
                    

                        {/* {project.title === "Real-time Chat Application" && (
                            <p className="mt-2 text-small font-light">
                                Click <a className="font-medium text-purple-900" href="https://chatapp-t58c.onrender.com/">here</a> for live demo.
                            </p>
                        )} */}

                        
                    </motion.div>
                    
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Projects
