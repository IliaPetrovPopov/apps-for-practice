import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import FollowClient from "./FollowClient";

interface Props {
  targetUserId: string;
}

export default async function FollowButton({ targetUserId }: Props) {
  const session = await getServerSession(authOptions);

  const currentUserEmail = session?.user?.email!;
  const currentUserId = await prisma.user
    .findFirst({
      where: {
        email: currentUserEmail!,
      },
    })
    .then((user) => user?.id);
  
  const isFollowing = await prisma.follows.findFirst({
    where: { followerId: currentUserId, followingId: targetUserId },
  });

  return (
    <FollowClient targetUserId={targetUserId} isFollowing={!!isFollowing}/>
  )
}
