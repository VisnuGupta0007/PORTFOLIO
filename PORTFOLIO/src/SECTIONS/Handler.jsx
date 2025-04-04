
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";

function Handler() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-5 h-auto md:h-16 font-semibold text-lg md:text-2xl mx-5 md:mx-20 py-4 md:py-0">
      <div className="flex items-center gap-3">
        <IoPersonCircleSharp className="text-3xl md:text-4xl" />
        <h1 className="text-3xl md:text-4xl"><Link to='/home'>Portfolio</Link> </h1>
      </div>

      <ul className="flex flex-col md:flex-row gap-5 md:gap-10 cursor-pointer mt-4 md:mt-0 text-lg md:text-2xl">
        {[ , "About", "Skills", "Project", "Contact"].map((item) => (
          <li
            key={item}
            className="hover:text-gray-600 hover:border-b-2 hover:border-gray-600 px-2 text-center"
          >
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Handler;
