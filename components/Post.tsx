import { NextPage } from "next";
import MDXProvider from '@mdx-js/loader'

export type PostProps = {
    id: string;
    title: string
    author: {
        name: string;
        email: string;
    } | null;
    content: string;
    published: boolean;
};

const Post: NextPage<{ post: PostProps }> = ({ post }) => {
    const authorName = post.author ? post.author.name : "Unknown Author";
    return (
        <div>
            <h2>{post.title}</h2>
            <small>By {authorName}</small>

            {/* mdx provides the content */}
            {/* <style jsx>{`
                div {
                    color: inherit;
                    padding: 2rem;
                }
            `}</style> */}
        </div>
    );
};

export default Post;
