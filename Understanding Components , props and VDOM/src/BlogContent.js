import BlogCards from "./BlogCards";


function BlogContent(){
    const blogs = [
        { title: "React Basics", content: "Learn the basics of React.", isFeatured: true },
        { title: "Advanced React", content: "Delve deeper into React.", isFeatured: false },
        { title: "React Performance Tips", content: "Optimize your React apps.", isFeatured: true },
      ];
      
    return (
        <>
        {blogs.map((data,index) =>(
            <BlogCards key={index} title={data.title} content={data.content} isFeatured={data.isFeatured}/>

        ))}
        </>
    )
}
export default BlogContent;