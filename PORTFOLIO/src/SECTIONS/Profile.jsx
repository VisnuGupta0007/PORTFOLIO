
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <section className='profile flex flex-col  md:flex-row  items-center justify-center mt-36 px-6 md:px-12 lg:px-24 gap-20'>
      <div className='flex justify-center'>
        <img src="" alt="" id='image-1' className='border rounded-full w-40 h-40 md:w-52 md:h-52' />
      </div>
      <div className='text-center md:text-left'>
        <h4 className='text-xl font-semibold text-gray-700'>Hello, I'm</h4>
        <h1 className='text-4xl md:text-5xl font-bold'>Visnu Gupta</h1>
        <h3 className='text-2xl text-gray-600 font-semibold mt-2'>Frontend Developer</h3>

        <div className='flex flex-col md:flex-row items-center md:items-start gap-4 mt-6'>
          <button
            className='border-2 border-slate-400 text-xl p-3 w-44 rounded-full font-semibold hover:bg-zinc-700 hover:text-white hover:animate-pulse'
            onClick={() => window.open("https://drive.google.com/file/d/1iu2xs_4025Zd9h1w-1QgSSBYCuEguTL5/view?usp=sharing", "_blank")}
          >
            Show CV
          </button>
          <Link to='/contact'>
            <button className='border-2 bg-zinc-700 text-white text-xl p-3 w-44 rounded-full font-semibold hover:bg-black hover:animate-pulse'>
              Contact Info
            </button>
          </Link>
        </div>

        <div className='flex justify-center gap-6 text-4xl mt-6'>
          <a href="https://www.linkedin.com/in/visnu-gupta-2b363631a/" className='hover:text-gray-600'>
            <TbBrandLinkedinFilled />
          </a>
          <a href="https://github.com/VisnuGupta0007/VisnuGupta0007" className='hover:text-gray-600'>
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Profile;
