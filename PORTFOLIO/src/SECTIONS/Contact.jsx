import { IoIosMail } from "react-icons/io";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className='contact flex flex-col items-center mt-20 px-6 md:px-12 lg:px-24'>
      <div className='text-center'>
        <h4 className='text-gray-700 text-2xl font-medium'>Get in Touch</h4>
        <h1 className='text-4xl md:text-5xl font-bold mt-3'>Contact Me</h1>
      </div>
      
      <div className='mt-10 p-4 w-full flex flex-col md:flex-row justify-center gap-6'>
        <button className='flex items-center border-2 border-black h-auto text-xl p-4 rounded-2xl gap-4 w-full md:w-auto justify-center'>
          <IoIosMail className='text-4xl' />
          <a href="mailto:visnugupta7788@gmail.com" className='hover:border-b-4 hover:border-gray-200 hover:text-gray-400'>VisnuGupta7788@gmail.com</a>
        </button>
        <button className='flex items-center border-2 border-black h-auto text-xl p-4 rounded-2xl gap-4 w-full md:w-auto justify-center'>
          <TbBrandLinkedinFilled className='text-4xl' />
          <a href="https://www.linkedin.com/in/visnu-gupta-2b363631a/" className='hover:border-b-4 hover:border-gray-200 hover:text-gray-400'>LinkedIn</a>
        </button>
      </div>

      <div className='mt-12'>
        <ul className='flex flex-wrap justify-center gap-6 text-lg md:text-2xl font-semibold mb-12'>
          <li className='cursor-pointer hover:text-gray-600 hover:border-b-4'><Link to='/About'>About</Link></li>
          <li className='cursor-pointer hover:text-gray-600 hover:border-b-4'><Link to='/Skills'>Skills</Link></li>
          <li className='cursor-pointer hover:text-gray-600 hover:border-b-4'><Link to='/Project'>Project</Link></li>
          <li className='cursor-pointer hover:text-gray-600 hover:border-b-4'><Link to='/Contact'>Contact</Link></li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;