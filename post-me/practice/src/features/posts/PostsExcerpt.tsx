import PostAuthor from "./PostAuthor";
import { Post } from "./postsSlice";

const PostsExcerpt: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>
        <PostAuthor userId={post.userId} />
      </p>
    </article>
  );
};

export default PostsExcerpt;
