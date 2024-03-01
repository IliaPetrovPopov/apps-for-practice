import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ProfileForm from "./ProfileForm";

async function Dashboard() {
  const session = await getServerSession(authOptions);
  
  if (!session) redirect("/api/auth/signin");

  const currentUserEmail = session?.user?.email!;
  const user = await prisma.user.findUnique({
    where: {
      email: currentUserEmail!
    },
  });
  
  return (
    <div>
      <ProfileForm user={user} />
    </div>
  );
}

export default Dashboard;
