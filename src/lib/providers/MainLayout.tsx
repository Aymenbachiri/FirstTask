"use client";

import { Modal } from "@/components/Modal";
import { useTasks } from "../context/taskContext";
import { ProfileModal } from "@/components/ProfileModal";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { isEditing, profileModal } = useTasks();

  return (
    <div
      style={{ borderRadius: 30 }}
      className="main-layout w-[60%] flex-1 bg-[#EDEDED] border-2 border-white overflow-auto"
    >
      {isEditing && <Modal />}
      {profileModal && <ProfileModal />}
      {children}
    </div>
  );
}
