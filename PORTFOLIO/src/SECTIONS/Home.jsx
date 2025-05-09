import React from 'react'
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaAward } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiDaisyui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";




function Home() {
    return (
        <>
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


            <section className='about mt-16 px-6 md:px-12 lg:px-24'>
                <div className='text-center'>
                    <h4 className='font-semibold text-gray-700'>Get To Know More</h4>
                    <h1 className='text-4xl md:text-5xl font-bold mt-3'>About Me</h1>
                </div>

                <div className='flex flex-col-reverse md:flex-row items-center mt-12 gap-10'>
                    <img
                        src=""
                        alt=""
                        id='image-2'
                        className='w-40 h-40 md:w-52 md:h-52 border rounded-3xl'
                    />

                    <div className='flex flex-col gap-6 w-full md:w-2/3'>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <div className='border-2 rounded-lg border-black p-4 flex flex-col items-center text-center'>
                                <FaAward className='text-4xl mb-2' />
                                <h1 className='text-2xl font-semibold'>Training</h1>
                                <p className='text-gray-700'>Web Designing</p>
                                <p className='text-gray-700'>MERN Stack</p>
                            </div>
                            <div className='border-2 border-black rounded-lg p-4 flex flex-col items-center text-center'>
                                <FaAward className='text-4xl mb-2' />
                                <h1 className='text-2xl font-semibold'>Education</h1>
                                <p className='text-gray-700'>Bachelor Of Arts</p>
                            </div>
                        </div>
                        <p className='text-gray-700 font-semibold text-center md:text-left'>
                            Passionate about creating user-centric, visually appealing, and responsive web applications. Proficient in modern frontend technologies like HTML, CSS, JavaScript, and frameworks such as React and Tailwind CSS. Seeking an opportunity to leverage my creativity and technical skills. A fast learner and problem-solver, I stay updated with the latest web technologies and strive to craft high-performing web solutions. Currently, I'm focused on expanding my expertise in modern front-end frameworks and UI/UX best practices.
                        </p>

                        <h1 className=' text-3xl text-center font-bold'>Certificates </h1>
                        <div className=" flex justify-center gap-16">
                            <button
                                className='border-2 bg-zinc-500 text-white text-xl p-3 w-44 rounded-full font-semibold hover:bg-black hover:animate-pulse'
                                onClick={() => window.open("https://drive.google.com/file/d/1KYnhPIIQiO1_WM5ECpjnRVZkE9g-Fews/view", "_blank")}>
                                Web Designing
                            </button>

                            <button
                                className='border-2 bg-zinc-500 text-white text-xl p-3 w-44 rounded-full font-semibold hover:bg-black hover:animate-pulse'
                                onClick={() => window.open("https://drive.google.com/file/d/1KSMUdZ_PVbclZ0hpUZDnR5UX8PEFzQuO/view", "_blank")}>
                                MERN Stack
                            </button>

                        </div>
                    </div>
                </div>
            </section >


            <section className="skills flex flex-col items-center mt-10 px-5 md:px-10">
                <div className="text-center">
                    <h1 className="text-gray-700 text-2xl font-medium md:text-3xl">
                        Explore My
                    </h1>
                    <h1 className="text-5xl font-bold mt-2 md:text-4xl">Skills</h1>
                </div>

                <div className="border-2 mt-10 rounded-3xl border-black p-5 md:p-8 w-full max-w-4xl">
                    <h1 className="text-4xl font-bold text-gray-700 text-center mt-5 md:text-3xl">
                        Frontend Development
                    </h1>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6 p-5">
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <FaHtml5 className=" text-2xl" />
                            <h3>HTML</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <IoLogoCss3 className=" text-2xl" />
                            <h3>CSS</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <RiJavascriptFill className=" text-2xl" />
                            <h3>JavaScript</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <DiJqueryLogo className=" text-2xl" />
                            <h3>jQuery</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <FaBootstrap className=" text-2xl" />
                            <h3>Bootstrap</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <FaReact className=" text-2xl" />
                            <h3>ReactJS</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <SiDaisyui className=" text-2xl" />
                            <h3>DaisyUI</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <RiTailwindCssFill className=" text-2xl" />
                            <h3>TailwindCSS</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <FaGitAlt className=" text-2xl" />
                            <h3>Git</h3>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-semibold">
                            <FaGithub className=" text-2xl" />
                            <h3>GitHub</h3>
                        </div>
                    </div>
                </div>
            </section>


             <section className='project flex flex-col items-center mt-10 px-6 md:px-12 lg:px-24'>
                <div className='text-center'>
                    <h4 className='text-gray-700 text-2xl font-medium'>Browse My Recent</h4>
                    <h1 className='text-4xl md:text-5xl font-bold mt-2'>Projects</h1>
                </div>


                <div className='mt-12 flex flex-col md:flex-row gap-10 justify-center items-center'>




                    {/* Card 1 */}
                    <div className='border-2 p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md'>
                        <div className='flex justify-center'>
                            <img

                                src="https://tse1.mm.bing.net/th?id=OIP.Or4sEmf4dlDEcO_NpYL8-gHaFr&pid=Api&P=0&h=180"
                                alt=""
                                className='  w-full h-60 md:h-80 border-2 rounded-3xl shadow-2xl object-cover'
                            />
                        </div>
                        <button className='flex shadow-xl items-center justify-center h-12 p-4 border-2 rounded-full mt-5 hover:bg-gray-800 hover:text-white hover:animate-pulse w-full'>
                            <a href="https://tailwind-react-app-orpin.vercel.app/" target="_blank" rel="noopener noreferrer" className=' font-mono'>Go Live</a>
                        </button>
                    </div>

                    {/* Card 2 */}

                    <div className='border-2 p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md'>
                        <div className='flex justify-center'>
                            <img

                                src="https://i.pinimg.com/736x/d9/8f/dd/d98fdd5c30de63fd1c79cbc380eb43c7.jpg"
                                alt=""
                                className='w-full h-60 md:h-80 border-2 rounded-3xl shadow-2xl object-cover'
                            />
                        </div>
                        <button className='flex shadow-xl items-center justify-center h-12 p-4 border-2 rounded-full mt-5 hover:bg-gray-800 hover:text-white hover:animate-pulse w-full'>
                            <a href="https://clone-kfc-tailwind-app.vercel.app/" target="_blank" rel="noopener noreferrer" className=' font-mono'>Go Live</a>
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className='border-2 p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md'>
                        <div className='flex justify-center'>
                            <img

                                src="https://tse2.mm.bing.net/th?id=OIP.wqHhmvPRyrqKt8UUkFFpUwAAAA&pid=Api&P=0&h=180"
                                alt="Clone_Cashify"
                                className='w-full h-60 md:h-80 border-2 rounded-3xl shadow-2xl object-cover'
                            />
                        </div>
                        <button className='flex shadow-xl items-center justify-center h-12 p-4 border-2 rounded-full mt-5 hover:bg-gray-800 hover:text-white hover:animate-pulse w-full'>
                            <a href="https://clone-cashify-tailwind-app.vercel.app/" target="_blank" rel="noopener noreferrer" className=' font-mono'>Go Live</a>
                        </button>
                    </div>


                    {/* Card 4 */}
                    <div className='border-2 p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md'>
                        <div className='flex justify-center'>
                            <img
                                src="https://tse1.mm.bing.net/th?id=OIP.iGZO46DdQlFctZ-03Hq2HgHaEm&pid=Api&P=0&h=180"
                                alt=""
                                className='w-full h-60 md:h-80 border-2 rounded-3xl shadow-2xl object-cover'
                            />
                        </div>
                        <button className='flex shadow-xl items-center justify-center h-12 p-4 border-2 rounded-full mt-5 hover:bg-gray-800 hover:text-white hover:animate-pulse w-full'>
                            <a href="https://github.com/VisnuGupta0007/HTML-AND-CSS-AMAZON-DUMMY-" target="_blank" rel="noopener noreferrer" className=' font-mono'>Go Live</a>
                        </button>
                    </div>


                </div>
            </section>
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




        </>
    )
}

export default Home
