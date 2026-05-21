import { redirect } from "next/navigation";

export default function HomePage() {
  // Redirect users to login first
  redirect("/login");

  return null;
}