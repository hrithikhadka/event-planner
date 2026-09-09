import { DashboardContent } from "@/components/dashboard-content";
import { getSession } from "@/lib/auth/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getSession();
  // If there is no authenticated user, kick them to login or home
  if (!session?.data?.user) {
    redirect("/auth/sign-in"); // or redirect("/") depending on your auth route
  }
  return <DashboardContent userId={session.data.user.id} />;
}
