import Image1 from "../assets/image1.png"
import Image2 from "../assets/image 2.png"
import Image3 from "../assets/image3.png"
import Right from '../assets/Right1.svg'
import BlogCard from "../components/BlogCard"

const Blog = ()=>{
    return(
        <div className="clients">
        <div className="text-center mb-5">
            <h2 className="text-3xl font-bold text-gray-700 mb-3">Caring is the new marketing</h2>
            <p className="text-gray-700 text-sm">
                The Nextcent blog is the best place 
                to read about the latest membership insights,
                 trends and more. See who's joining the community, 
                 read about how our community are increasing their membership income and 
                 lot's more.
            </p>
        </div>
        <div className="flex  mt-7 gap-12 ms-25 ">
           <div className="flex flex-col items-center gap-4">
                <img src={Image1} alt="" className="w-[300px] h-auto object-cover rounded-md" />

                <div className="w-[250px] -mt-14 mx-auto z-10">
                    <BlogCard
                    title="Creating Streamlined Safeguarding Processes with OneRen"
                    Right={Right}
                    />
                </div>
          </div>



           <div className="flex flex-col items-center gap-4">
                <img src={Image2} alt="" className="w-[300px] h-auto object-cover rounded-md" />

                <div className="w-[250px] -mt-14 mx-auto z-10">
                    <BlogCard
                    title="What are your safeguarding responsibilities and how can you manage them?"
                    Right={Right}
                    />
                </div>
          </div>

          <div className="flex flex-col items-center gap-4">
                <img src={Image3} alt="" className="w-[300px] h-auto object-cover rounded-md" />

                <div className="w-[250px] -mt-14 mx-auto z-10">
                    <BlogCard
                    title="Revamping the Membership Model with Triathlon Australia"
                    Right={Right}
                    />
                </div>
          </div>
           
           {/* <img src={Illustration} width={400} alt="Illustration" /> */}
        </div>
        
        
    </div>
    )
}

export default Blog