import React, { useState } from 'react';
import { blog_data, blogCategories } from '../assets/assets';
import { motion } from 'framer-motion'; // Corrected import path
import BlogCard from './BlogCard';

const BlogList = () => {
  const [menu, setMenu] = useState('All');

  const filteredBlogs = blog_data.filter(blog =>
    menu === 'All' ? true : blog.category === menu
  );

  return (
    <div className="px-4 sm:px-8 xl:px-40">
      {/* Category Buttons */}
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative flex-wrap">
        {blogCategories.map((item) => (
          <div key={item} className="relative">
            <button
              onClick={() => setMenu(item)}
              className={`relative cursor-pointer text-sm sm:text-base transition-all duration-200 ${
                menu === item ? 'text-white px-4 py-1 font-semibold' : 'text-gray-500'
              }`}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId="underline"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="absolute left-0 right-0 top-0 h-7 -z-10 bg-primary rounded-full"
                />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
        ) : (
          <p className="text-center col-span-full text-gray-500">
            
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
