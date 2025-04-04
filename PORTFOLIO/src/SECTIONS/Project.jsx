
import React from 'react';

function Project() {
  return (
    <section className='project flex flex-col items-center mt-10 px-6 md:px-12 lg:px-24'>
      <div className='text-center'>
        <h4 className='text-gray-700 text-2xl font-medium'>Browse My Recent</h4>
        <h1 className='text-4xl md:text-5xl font-bold mt-2'>Projects</h1>
      </div>

      <div className='mt-12 flex flex-col md:flex-row gap-10 justify-center items-center'>
        <div className='border-2 p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md'>
          <div className='flex justify-center'>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.iGZO46DdQlFctZ-03Hq2HgHaEm&pid=Api&P=0&h=180"
              alt=""
              className='w-full h-60 md:h-80 border-2 rounded-3xl shadow-2xl object-cover'
            />
          </div>
          <button className='flex shadow-xl items-center justify-center h-12 p-4 border-2 rounded-full mt-5 hover:bg-gray-800 hover:text-white hover:animate-pulse w-full'>
            <a href="https://github.com/VisnuGupta0007/HTML-AND-CSS-AMAZON-DUMMY-" target="_blank" rel="noopener noreferrer">GitHub Link</a>
          </button>
        </div>

        <div className='border-2 p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md'>
          <div className='flex justify-center'>
            <img

              src="https://tse1.mm.bing.net/th?id=OIP.Or4sEmf4dlDEcO_NpYL8-gHaFr&pid=Api&P=0&h=180"
              alt=""
              className='w-full h-60 md:h-80 border-2 rounded-3xl shadow-2xl object-cover'
            />
          </div>
          <button className='flex shadow-xl items-center justify-center h-12 p-4 border-2 rounded-full mt-5 hover:bg-gray-800 hover:text-white hover:animate-pulse w-full'>
            <a href="https://github.com/VisnuGupta0007/LANDING-PAGE" target="_blank" rel="noopener noreferrer">GitHub Link</a>
          </button>
        </div>
      </div>
    </section>

  );
}

export default Project;
