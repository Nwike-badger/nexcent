import React from 'react';

const BlogCard = ({ title, Right }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center w-full max-w-sm mx-auto">
      <h3 className=" mb-4">{title}</h3>
      
      <a href="/RegisterNow" className="flex items-center justify-center gap-2 text-[#4CAF4F] font-medium hover:underline">
        <span>Register Now</span>
        <img src={Right} width={20} alt="arrow" />
      </a>
    </div>
  );
};

export default BlogCard;


//  className="flex items-center justify-center 
//         text-[#4CAF4F] font-medium hover:underline gap-2
//          mx-auto"