import React from "react";
import Container from "../../utils/Container";
import BlogCard from "../../utils/BlogCard";

const BlogSection = () => {
  return (
    <Container>
      <div className="w-full mt-[100px] mb-[100px]">
        <div className="text-center">
          <h1 className="font-bold text-[35px] text-[#262b2c]">Latest Blog</h1>
          <p>There are many variations of passages of Lorem Ipsum available</p>
        </div>
        <div className="w-full blog-mainContainer">
          <BlogCard className="grid-col-4" />
          <BlogCard className="grid-col-4" />
          <BlogCard className="grid-col-4" />
        </div>
      </div>
    </Container>
  );
};

export default BlogSection;
