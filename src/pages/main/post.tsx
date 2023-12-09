import { PostType } from "./main";

interface Props{
    post: PostType;
}

export const Post = (props: Props) => {
    const {post} = props;

    return (
      <div className="Title">
        <h1>{post.title}</h1>
        <div className="body">
        <p>{post.description}</p>
        </div>
        <div className="footer">
        <p>@{post.username}</p>
        </div>
      </div>
    );
}