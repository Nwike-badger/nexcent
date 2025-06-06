import Illustration from "../assets/Illustration.png"
const History = ()=>{
    return(
        <div className="bg-[#F5F7FA]">

            <div className=" history flex flex-col md:flex-row items-center justify-between  gap-y-6 md:gap-x-10">
                    <div className="lg:w-1/2 text-center md:text-left">
                        <h1 className="text-gray-700 text-3xl md:text-4xl lg:text-6xl font-semibold mb-4">
                        Lessons and insights from 8 years
                        </h1>
                        <p className="text-sm mb-6 text-gray-700">
                        Where to grow your business as a photographer: site or social media?
                        </p>
                        <button className="bg-[#4CAF4F] text-white px-6 py-3 rounded text-sm font-medium">
                        Register
                        </button>
                    </div>

                    <div>
                        <img src={Illustration} width={400} alt="Illustration" />
                    </div>

            </div>

      </div>

         )
}
export default History