"use client";

import { useSession } from "next-auth/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function AuthCheck({ children }: Props) {
  const { data: session, status } = useSession();

  console.log(session, status);

  if (status === "authenticated") {
    return <>{children}</>;
  } else {
    return <></>;
  }
}

export default AuthCheck;
