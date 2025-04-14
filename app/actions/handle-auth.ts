"use server";

import { auth, signIn, signOut } from "@/app/lib/auth";

export const handleAuth = async () => {
  const session = await auth();

  if (session) {
    await signOut({
      redirectTo: "/login",
    });
  }

  await signIn("google", {
    redirectTo: "/dashboard",
  });
};
