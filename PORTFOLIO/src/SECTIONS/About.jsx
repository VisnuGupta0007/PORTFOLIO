import { FaAward } from "react-icons/fa";

function About() {
  return (
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
            Passionate about creating user-centric, visually appealing, and Responsive web Applications. Proficient in modern frontend technologies like HTML, CSS, JavaScript, and frameworks such as React and Tailwind CSS. Seeking an opportunity to leverage my creativity and technical skills. A fast learner and problem-solver, I stay updated with the latest web technologies and strive to craft high-performing web solutions. Currently, I'm focused on expanding my expertise in modern front-end frameworks and UI/UX best practices.
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
  );
}

export default About;
