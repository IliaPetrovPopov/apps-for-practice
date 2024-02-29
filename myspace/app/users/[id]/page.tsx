import UserCard from "@/components/UserCard/UserCard";
import styles from "../page.module.css";
import { prisma } from "@/lib/prisma";

interface Props {
  params: {
    id: string;
  };
}
export async function generateMetadata({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image } = user ?? {};

  return (
    <div>
      <h1>{name}</h1>

      <img
        width={300}
        src={image ?? "/mememan.webp"}
        alt={`${name}'s profile`}
      />

      <h3>Bio</h3>
      <p>{bio}</p>
    </div>
  );
}
