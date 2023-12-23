import { useEffect, useRef } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  selectAllPosts,
  getPostsError,
  getPostsStatus,
  fetchPosts,
} from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

const PostsList: React.FC = () => {
  const dispatch = useAppDispatch();

  const effectRan = useRef(false);

  const posts = useAppSelector(selectAllPosts);
  const postsStatus = useAppSelector(getPostsStatus);
  const error = useAppSelector(getPostsError);

  useEffect(() => {
    if (effectRan.current === false) {
      if (postsStatus === "idle") {
        dispatch(fetchPosts());
      }

      return () => {
        effectRan.current = true;
      };
    }
  }, [dispatch, postsStatus]);

  let content;
  if (postsStatus === "succeeded") {
    content = posts.slice().map((post) => <PostsExcerpt key={post.id} post={post} />);
  }

  return (
    <section>
      <h2>Posts:</h2>
      {content}
    </section>
  );
};

export default PostsList;
