"use client";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

export function SignOutBtn() {
  return (
    <button className="mt-auto mb-6 mx-6 py-4 px-8 bg-[#EB4E31] text-white rounded-[50px] hover:bg-[#3aafae] transition duration-200 ease-in-out">
      <LogoutLink>Sign Out</LogoutLink>
    </button>
  );
}
