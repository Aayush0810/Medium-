import { Link } from "react-router-dom";

interface Props {
  authorName: string;
  publishDate: string;
  content: string;
  heading: string;
  id: string;
}
export const BlogCard = ({
  id,
  authorName,
  publishDate,
  content,
  heading,
}: Props) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="border-b border-slate-200 pb-4 pt-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <div>
            <Avatar name={authorName} />
          </div>
          <div className="flex justify-center flex-col font-normal pl-2 text-sm">
            {authorName}
          </div>
          <div className="flex justify-center flex-col pl-1">
            <Circle />
          </div>
          <div className="flex justify-center flex-col font-extralight pl-1 text-sm">
            {publishDate}
          </div>
        </div>
        <div className="font-bold text-xl">{heading}</div>
        <div className="font-normal text-slate-700">
          {`${content.slice(0, 200)}...`}
        </div>
        <div className="font-extralight text-sm pt-3">
          {`${Math.ceil(content.length / 100)} minutes`}
        </div>
      </div>
    </Link>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-extralight text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
