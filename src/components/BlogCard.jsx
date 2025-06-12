import React from 'react';
import Right from '../assets/Right1.svg';
import { Link } from 'react-router-dom';

const BlogCard = ({ title }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center w-full max-w-sm mx-auto">
      <h3 className="mb-4">{title}</h3>
      <Link to="/register" className="flex items-center justify-center gap-2 text-[#4CAF4F] font-medium hover:underline">
        <span>Register Now</span>
        <img src={Right} width={20} alt="arrow" />
      </Link>
    </div>
  );
};

export default BlogCard;
