"use client";

import { logout } from "@/actions/auth";

export default function Logout() {
  return <button onClick={() => logout()}>Log Out</button>;
}
