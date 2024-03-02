"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const updateUser = async (formData: FormData) => {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;

  await prisma.user.update({
    where: {
      email: currentUserEmail,
    },
    data: {
      name: formData.get("name") as string,
      bio: formData.get("bio") as string,
      age: Number(formData.get("age")),
      image: formData.get("image") as string,
    },
  });

  revalidatePath("/dashboard");
};
