import { useState } from "react";
import Logo from "../assets/Icon.svg";
import Responsive from '../assets/responsive.svg'
import Right from '../assets/Right.svg'


const Navbar = () => {
    const [mobile, setMobile] = useState(false)

  return (
    <nav className="nav">
      <div className="hidden md:flex justify-between">
  <div className="flex items-center gap-2">
    <a href="">
      <img src={Logo} width={36} />
    </a>
    <h5 className="text-2xl font-semibold">
      <a href="/Nexcent">Nexcent</a>
    </h5>
  </div>

  <div className="flex items-center gap-5 text-sm text-[#4F5665]">
    <h5>
      <a href="/Home">Home</a>
    </h5>
    <h5>
      <a href="/features">Features</a>
    </h5>
    <h5>
      <a href="/community">Community</a>
    </h5>
    <h5>
      <a href="/Blog">Blog</a>
    </h5>
    <h5>
      <a href="/Pricing">Pricing</a>
    </h5>

    <h5 className="bg-[#4CAF4F] text-white px-4 py-2 rounded text-sm">
      <a href="/RegisterNow">
        <div className="flex items-center space-x-2">
          <span>Register Now</span>
          <img src={Right} width={26} />
        </div>
      </a>
    </h5>
  </div>
</div>


      <div className="flex md:hidden justify-between  gap-3">
        <div className="flex items-center gap-2">
            <a href="">
                <img src={Logo} width={36} />
            </a>
          <h5 className="text-2xl font-semibold">
           <a href="/">
                Nexcent
            </a>
          </h5>
        </div>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setMobile(!mobile)}
        >
          <span className="sr-only">Open main menu</span>
            <img src={Responsive} alt="responsive image"/>
        </button>
      </div>

       {mobile &&  <>
            <div className='block md:hidden text-lg text-[#4F5665] mt-5'>
                <h5 className="mb-3 mx-8 hover:bg-[#4CAF4F] hover:text-white rounded">
                    <a href="/home">
                        Home
                    </a>
                </h5>
                <h5 className="my-3 mx-8 hover:bg-[#4CAF4F] hover:text-white rounded">
                    <a href="/features">
                        Features
                    </a>
                </h5>
                <h5 className="my-3 mx-8 hover:bg-[#4CAF4F] hover:text-white rounded">
                    <a href="/community">
                        Community
                    </a>
                </h5>
                <h5 className="my-3 mx-8 hover:bg-[#4CAF4F] hover:text-white rounded">
                    <a href="/blog">
                        Pricing
                    </a>
                </h5>
                <h5 className="bg-[#4CAF4F] text-white py-1 my-3 mx-8 hover:bg-white hover:text-[#4F5665] rounded">
                    <a href="/help">
                        Register Now
                    </a>
                </h5>
            </div>
            
        </>}
    </nav>
  );
};

export default Navbar;
