import Tesla from "../assets/tesla.png"
import Clientlogo1 from "../assets/clientslogo.svg"
import Clientlogo2 from "../assets/clientslogo2.svg"
import Clientlogo3 from "../assets/clientslogo3.svg"
import Clientlogo4 from "../assets/clientslogo4.svg"
import Clientlogo5 from "../assets/clientslogo5.svg"
import Clientlogo6 from "../assets/clientslogo6.svg"
import Clientlogo7 from "../assets/clientslogo7.svg"
import Right from '../assets/Right1.svg'
const Customers = ()=>{
    return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-28 px-4 py-8">
        <div className="w-full lg:w-1/4">
            <img src={Tesla} alt="Illustration" className="w-full h-auto object-contain" />
        </div>

  <div className="w-full lg:w-1/3 text-center lg:text-left">
    <h2 className="text-2xl font-semibold mb-4">
      The unseen of spending three years at Pixelgrade
    </h2>
    
    <p className="text-gray-600 mb-6 text-sm">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. 
      Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. 
      Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. 
      Donec elementum pulvinar odio.
    </p>

    <p className="font-extrabold text-[#4CAF4F] text-[16px] mb-2">
        Tim Smith
    </p>

    <p className="text-sm">
        British Dragon Boat Racing Association
    </p>

     <div className="flex justify-between mt-7 gap-7">
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

               
               {/* <img src={Illustration} width={400} alt="Illustration" /> */}
            </div>

    
  </div>
</div>
    )
}

export default Customers