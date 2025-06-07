import Image1 from "../assets/image1.png"
import Image2 from "../assets/image 2.png"
import Image3 from "../assets/image3.png"
import BlogCard from "../components/BlogCard"

const Blog = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10 max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-gray-700 mb-3">Caring is the new marketing</h2>
        <p className="text-gray-700 text-sm">
          The Nextcent blog is the best place 
          to read about the latest membership insights,
          trends and more. See who's joining the community, 
          read about how our community are increasing their membership income and 
          lot's more.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-10">
        {[Image1, Image2, Image3].map((imgSrc, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <img src={imgSrc} alt="" className="w-full max-w-xs h-auto object-cover rounded-md" />
            <div className="w-full max-w-[250px] -mt-14 mx-auto z-10">
              <BlogCard
                title={
                  index === 0 ? "Creating Streamlined Safeguarding Processes with OneRen" :
                  index === 1 ? "What are your safeguarding responsibilities and how can you manage them?" :
                  "Revamping the Membership Model with Triathlon Australia"
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
