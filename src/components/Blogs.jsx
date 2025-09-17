import React from "react";

const Blogs = () => (
  <section id="blogs" className="p-8">
    <h2 className="text-2xl font-bold mb-2">Latest Blogs</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">Blog Title 1</h3>
        <p className="text-gray-600 text-sm mb-3">
          A short description of the blog post goes here to give users an idea
          about the content.
        </p>
        <button className="text-blue-600 font-medium hover:underline">
          Read More
        </button>
      </div>

      <div className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">Blog Title 2</h3>
        <p className="text-gray-600 text-sm mb-3">
          A short description of the blog post goes here to give users an idea
          about the content.
        </p>
        <button className="text-blue-600 font-medium hover:underline">
          Read More
        </button>
      </div>

      <div className="border p-4 rounded-xl shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-2">Blog Title 3</h3>
        <p className="text-gray-600 text-sm mb-3">
          A short description of the blog post goes here to give users an idea
          about the content.
        </p>
        <button className="text-blue-600 font-medium hover:underline">
          Read More
        </button>
      </div>
    </div>
  </section>
);

export default Blogs;
