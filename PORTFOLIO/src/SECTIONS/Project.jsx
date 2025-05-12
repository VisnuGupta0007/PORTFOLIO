import React from 'react';

function Project() {
  return (
    <section className='project flex flex-col items-center mt-10 px-6 md:px-12 lg:px-24'>
      <div className='text-center'>
        <h4 className='text-gray-700 text-2xl font-medium'>Browse My Recent</h4>
        <h1 className='text-4xl md:text-5xl font-bold mt-2'>Projects</h1>
      </div>


         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center px-4">
        {/* Card 1 */}
        <div className="border-2 p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md">
          <div className="flex justify-center">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.Or4sEmf4dlDEcO_NpYL8-gHaFr&pid=Api&P=0&h=180"
              alt="Card 1"
              className="w-full h-60 md:h-80 border-2 rounded-3xl shadow-2xl object-cover"
            />
          </div>
          <button className="flex shadow-xl items-center justify-center h-12 p-4 border-2 rounded-full mt-5 hover:bg-gray-800 hover:text-white hover:animate-pulse w-full">
            <a
              href="https://tailwind-react-app-orpin.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono"
            >
              Go Live
            </a>
          </button>
        </div>

        {/* Card 2 */}
        <div className="border-2 p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md">
          <div className="flex justify-center">
            <img
              src="https://i.pinimg.com/736x/d9/8f/dd/d98fdd5c30de63fd1c79cbc380eb43c7.jpg"
              alt="Card 2"
              className="w-full h-60 md:h-80 border-2 rounded-3xl shadow-2xl object-cover"
            />
          </div>
          <button className="flex shadow-xl items-center justify-center h-12 p-4 border-2 rounded-full mt-5 hover:bg-gray-800 hover:text-white hover:animate-pulse w-full">
            <a
              href="https://clone-kfc-tailwind-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono"
            >
              Go Live
            </a>
          </button>
        </div>

        {/* Card 3 */}
        <div className="border-2 p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md">
          <div className="flex justify-center">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.wqHhmvPRyrqKt8UUkFFpUwAAAA&pid=Api&P=0&h=180"
              alt="Clone_Cashify"
              className="w-full h-60 md:h-80 border-2 rounded-3xl shadow-2xl object-cover"
            />
          </div>
          <button className="flex shadow-xl items-center justify-center h-12 p-4 border-2 rounded-full mt-5 hover:bg-gray-800 hover:text-white hover:animate-pulse w-full">
            <a
              href="https://clone-cashify-tailwind-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono"
            >
              Go Live
            </a>
          </button>
        </div>

        {/* Card 4 */}
        <div className="border-2 p-6 md:p-10 rounded-3xl shadow-2xl w-full max-w-md">
          <div className="flex justify-center">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.iGZO46DdQlFctZ-03Hq2HgHaEm&pid=Api&P=0&h=180"
              alt="Card 4"
              className="w-full h-60 md:h-80 border-2 rounded-3xl shadow-2xl object-cover"
            />
          </div>
          <button className="flex shadow-xl items-center justify-center h-12 p-4 border-2 rounded-full mt-5 hover:bg-gray-800 hover:text-white hover:animate-pulse w-full">
            <a
              href="https://github.com/VisnuGupta0007/HTML-AND-CSS-AMAZON-DUMMY-"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono"
            >
              Go Live
            </a>
          </button>
        </div>
      </div>    </section>

  );
}

export default Project;
