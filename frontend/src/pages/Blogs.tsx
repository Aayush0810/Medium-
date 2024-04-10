import { BlogCard } from "../components/BlogCard";
import { Skeleton } from "../components/Skeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return (
      <div>
        <div className="flex justify-center">
          <div>
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="">
        {blogs.map((blog) => (
          <BlogCard
            id={blog.id}
            authorName={blog.author.name}
            content={blog.content}
            publishDate={"7th April, 2024"}
            heading={blog.title}
          />
        ))}
      </div>
    </div>
  );
};
