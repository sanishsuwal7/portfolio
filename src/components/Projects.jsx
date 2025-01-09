import { PROJECTS } from "../constants"
import {animate, motion} from 'framer-motion';

const Projects = () => {
    const handleClick = () => {
        window.location.href = "https://chatapp-t58c.onrender.com/";
    }

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
                            <div className="flex flex-row w-full justify-items-start">
                                <h6 className="mb-3 font-semibold">{project.title}</h6>
                                {project.title === "Real-time Chat Application" && (
                                    <button className="mx-4 rounded bg-neutral-900 px-2 py-1 text-small font-medium text-purple-900" onClick={handleClick}>
                                        Live Demo
                                    </button>
                                 )}
                            </div>
                        
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((technology, index) => (
                            <span key={index} className="m-2 rounded bg-neutral-900 px-2 py-1 text-small font-medium text-purple-900">{technology}</span>
                        ))}

                        
                    </motion.div>
                    
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Projects
