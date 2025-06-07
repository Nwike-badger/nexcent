import Right from '../assets/Right.svg'
const Footer = ()=>{
    return(
        <div>
            <div className='bg-[#F5F7FA] py-10'>
            <h1 className="text-center text-5xl  ">
                Pellentesque suscipit <br /> fringilla libero eu.
            </h1>
           <div className='  flex justify-center mt-7'>
             <a
                href="/RegisterNow"
                className="inline-flex items-center bg-[#4CAF4F] text-white font-semibold px-5 py-2 rounded-md hover:bg-green-600 transition"
                >
                <span className="mr-2">Register Now</span>
                <img src={Right} alt="arrow" width={20} height={20} />
            </a>
           </div>


        </div>
           <div className="bg-[#263238] py-10 px-6 lg:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 clients">
    
    
    <div>
      <h2 className="text-2xl font-bold text-white mb-3">Nexcent</h2>
      <p className="text-white text-sm">Copyright © 2020 Landify UI Kit.</p>
      <p className="text-white text-sm">All rights reserved.</p>
    </div>

    
    <div>
      <h4 className="text-lg font-semibold mb-3 text-white">Company</h4>
      <ul className="space-y-2 text-sm text-white">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Testimonials</a></li>
      </ul>
    </div>

    
    <div>
      <h4 className="text-lg font-semibold mb-3 text-white">Support</h4>
      <ul className="space-y-2 text-sm text-white">
        <li><a href="#">Help Center</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Legal</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Status</a></li>
      </ul>
    </div>

    
    <div>
      <h4 className="text-lg font-semibold mb-3 text-white">Stay Up to Date</h4>
      <form className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4CAF4F] text-white"
        />
        <button
          type="submit"
          className="bg-[#4CAF4F] text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
        >
          Subscribe
        </button>
      </form>
    </div>

  </div>
</div>
 
        </div>
    )
}
export default Footer