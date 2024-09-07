import logo from "../assets/logo.png";
import {FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <p className="mx-2 w-10 font-bold tracking-tight lg:mt-8 lg:text-3xl">Ss</p>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href={`https://www.linkedin.com/in/sanishsuwal`} target="blank">
              <FaLinkedin />
            </a>
            <a href={`https://github.com/sanishsuwal7`} target="blank">
              <FaGithub />
            </a>
        </div>
     </nav> 
  )
}

export default Navbar;
