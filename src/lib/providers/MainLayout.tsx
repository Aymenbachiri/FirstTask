import { Modal } from "@/components/Modal";

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{ borderRadius: 30 }}
      className="main-layout w-[60%] flex-1 bg-[#EDEDED] border-2 border-white overflow-auto"
    >
      <Modal />
      {children}
    </div>
  );
}
