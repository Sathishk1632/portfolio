//import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
            {/* <img  className="mx-2 w-10" src={logo} alt="" /> */}
            <h1 className='text-6xl font-extrabold'>Sa</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/sathishk1632/"><FaLinkedin/></a>
            <a href="https://github.com/Sathishk1632"><FaGithub/></a>
            
        </div>
    </nav>
  )
}

export default Navbar