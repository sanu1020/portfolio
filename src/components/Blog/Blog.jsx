import React from "react";
import blog from "../../data/blog";
import BlogItem from "./BlogItem";

function Blog() {
    return (
        <div className="pt-20 pb-6 w-full md:w-7/12">
            {blog.map((blog )=> (
                <BlogItem
                    key={blog.id} 
                    title={blog.title}
                    date={blog.date}
                    image={blog.image}
                    content={blog.content}
                />
            ))}
    
            
        </div>
    )
}

export default Blog;