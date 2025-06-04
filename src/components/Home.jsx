import Photo from "../assets/photo.png"
import { BiLogoGithub, BiLogoGoogle, BiLogoLinkedin, BiLogoWhatsapp } from "react-icons/bi"
import { BiEnvelope } from "react-icons/bi";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div id="Home" className="flex min-h-screen w-full items-center justify-center">
            <motion.div initial={{opacity: 0, y:-200}} transition={{duration: 1.2}} whileInView={{opacity: 1, y:0}} viewport={{once:true}} className="flex flex-col items-center justify-center gap-9 p-5 text-center">
                <img src={Photo} alt="Profile Picture" className="w-[350px] md:w-[380px]"/>
                <div className="space-y-1 flex flex-col gap-2 sm:space-y-3 ">
                    <h1 className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-6xl font-semibold text-transparent h-18 md:text-7xl md:h-22">Dmitriy Khegay</h1>
                    <h3 className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-3xl font-semibold text-transparent h-15 md:text-5xl md:h-17">Web Developer</h3>
                    <p className="max-w-[500px] text-md text-gray-500"> Passionate about crafting responsive, user-friendly web applications using JavaScript, <span className="text-teal-400 underline">React</span>, and Firebase. Focused on writing clean code, solving real problems, and growing through hands-on practice and mentorship. Brings fresh energy, attention to detail, and a strong commitment to learning into every development environment.</p>
                </div>
                
                <div className="flex gap-3">
                    <a href="https://github.com/Dmitriy88k" target="_blank" rel="noopener noreferrer"><BiLogoGithub className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-11 md:w-11"/></a>
                    <a href="https://www.linkedin.com/in/dmitriy-khegay-2b3297111/" target="_blank" rel="noopener noreferrer"><BiLogoLinkedin className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-11 md:w-11"/></a>
                    <a href="#Contact"><BiEnvelope className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-teal-600 p-2 text-white transition-all duration-200 hover:scale-110 hover:border-teal-600 hover:bg-white hover:text-teal-600 md:h-11 md:w-11"/></a>
                </div>
            </motion.div>
        </div>
    )
}

export default Home;