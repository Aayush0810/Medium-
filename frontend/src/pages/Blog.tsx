import { useParams } from "react-router-dom";
import { useBlog, Blogs } from "../hooks"
import MainBlog from "../components/MainBlog";

export const Blog = () => {

    const {id} = useParams();

    const {blog, loading} = useBlog({
        id: id || ""
    });

    if(loading || !blog) {
        return (
            <div>
                loading...
            </div>
        )
    }

    return (
        <div>
            <MainBlog blog={blog}/>
        </div>

    )
}