import Tesla from "../assets/tesla.png"
import Clientlogo1 from "../assets/clientslogo.svg"
import Clientlogo2 from "../assets/clientslogo2.svg"
import Clientlogo3 from "../assets/clientslogo3.svg"
import Clientlogo4 from "../assets/clientslogo4.svg"
import Clientlogo5 from "../assets/clientslogo5.svg"
import Clientlogo6 from "../assets/clientslogo6.svg"
import Right from '../assets/Right1.svg'

const Customers = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-28">
        <div className="w-full lg:w-1/4">
          <img src={Tesla} alt="Illustration" className="w-full h-auto object-contain" />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-gray-600 mb-6 text-sm">
            Maecenas dignissim justo eget nulla rutrum molestie. 
            Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. 
            Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. 
            Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit.
            Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium.
            Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. 
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <p className="font-extrabold text-[#4CAF4F] text-[16px] mb-2">Tim Smith</p>
          <p className="text-sm">British Dragon Boat Racing Association</p>

          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-7">
            <img src={Clientlogo1} alt="" />
            <img src={Clientlogo2} alt="" />
            <img src={Clientlogo3} alt="" />
            <img src={Clientlogo4} alt="" />
            <img src={Clientlogo5} alt="" />
            <img src={Clientlogo6} alt="" />
            <button className="text-[#4CAF4F] font-bold hover:bg-green-100 transition flex items-center gap-2 px-4 py-2 whitespace-nowrap">
              Meet All customers
              <img src={Right} width={20} alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
