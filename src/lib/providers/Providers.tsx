import { Header } from "@/components/Header";
import { MiniSidebar } from "@/components/MiniSidebar";
import { MainContentLayout } from "./MainContentLayout";
import SidebarProvider from "./SidebarProvider";
import { MainLayout } from "./MainLayout";
import { AuthProvider } from "./AuthProvider";
import { TasksProvider } from "../context/taskContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <TasksProvider>
        <div className="flex h-full overflow-hidden">
          <MiniSidebar />
          <div className="flex-1 flex flex-col">
            <Header />
            <MainContentLayout>
              <MainLayout>{children}</MainLayout>
              <SidebarProvider />
            </MainContentLayout>
          </div>
        </div>
        {/* {children} */}
      </TasksProvider>
    </AuthProvider>
  );
}
