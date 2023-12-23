import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectAllUsers } from "../users/usersSlice";

interface PostAuthor {
  userId: string
}

const PostAuthor: React.FC<PostAuthor> = ({ userId }) => {
  const users = useAppSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return <span>by {author ? author.name : "Unknown author"}</span>;
};

export default PostAuthor;
