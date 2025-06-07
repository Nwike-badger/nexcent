import Clientlogo1 from "../assets/clientslogo.svg"
import Clientlogo2 from "../assets/clientslogo2.svg"
import Clientlogo3 from "../assets/clientslogo3.svg"
import Clientlogo4 from "../assets/clientslogo4.svg"
import Clientlogo5 from "../assets/clientslogo5.svg"
import Clientlogo6 from "../assets/clientslogo6.svg"
import Clientlogo7 from "../assets/clientslogo7.svg"

const Clients = ()=>{
    return(
        <div className="clients">
        <div className="text-center mb-5">
            <h2 className="text-3xl font-bold text-gray-700 mb-3">Our Clients</h2>
            <p className="text-gray-700 text-sm">
                We have been working with some Fortune 500+ clients
            </p>
        </div>
        <div className="flex justify-between mt-7">
           <img src={Clientlogo1} alt="" />
           <img src={Clientlogo2} alt="" />
           <img src={Clientlogo3} alt="" />
           <img src={Clientlogo4} alt="" />
           <img src={Clientlogo5} alt="" />
           <img src={Clientlogo6} alt="" />
           <img src={Clientlogo7} alt="" />
           {/* <img src={Illustration} width={400} alt="Illustration" /> */}
        </div>
        
        
    </div>
    )
}

export default Clients