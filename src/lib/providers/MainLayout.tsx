export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="main-layout flex-1 bg-[#EDEDED] border-2 border-white rounded-[1.5rem] overflow-auto">
      {children}
    </div>
  );
}
