import { Blogs } from "../hooks";
import { Avatar } from "./BlogCard";

const MainBlog = ({ blog }: { blog: Blogs }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 pt-12 px-10 w-full max-w-screen-xl">
        <div className="col-span-8  mr-12">
          <div className="text-3xl font-extrabold ">{blog.title}</div>
          <div className="font-extralight pt-4">Posted on 9th April,2024</div>
          <div className="pt-4">{blog.content}</div>
        </div>
        <div className="col-span-4">
          <div className="text-slate-600 text-lg">Author</div>

          <div className="flex w-full">
            <div className="pr-4 flex flex-col justify-center">
              <Avatar name={blog.author.name || "Anonymous"} />
            </div>

            <div>
              <div className="text-xl font-bold">
                {blog.author.name || "Anonymous"}
              </div>
              <div className="pt-2 text-slate-500">
                Random catch phrase about author's ability to grab the user's
                attention
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBlog;
