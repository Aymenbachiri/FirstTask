import { Sidebar } from "@/components/Sidebar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function SidebarProvider() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (user) return <Sidebar />;

  return null;
}
