import { RxHamburgerMenu } from "react-icons/rx";
import { IoSunnyOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";

function Nav() {
  const navData = [
    { id: 1, title: "Home", link: "/" },
    { id: 2, title: "About", link: "/" },
    { id: 3, title: "Contact", link: "/" },
  ];

  return (
    <div className="flex justify-between items-center  py-4 container  ">
      <div>
        <h1 className="text-xl font-bold">Santhosh</h1>
      </div>
      <nav>
<ul className="hidden md:flex gap-6">
          {navData.map((item) => (
            <li key={item.id} className="text-black hover:text-blue-600">
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div  className="flex justify-between gap-6" >
       <div className="sm:black md:hidden">
        <RxHamburgerMenu />
       </div>
       <div  className="flex justify-between gap-3 bg-gray-300 rounded-full p-1" >
        <IoSunnyOutline />
        <FiMoon />

       </div>
      </div>
    </div>
  );
}

export default Nav;
