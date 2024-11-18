"use client";

import { Filters } from "@/components/Filters";
import { TaskItem } from "@/components/TaskItem";
import { useTasks } from "@/lib/context/taskContext";
import { container, item } from "@/lib/utils/animations";
import { filteredTasks } from "@/lib/utils/utils";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Page() {
  const { openModalForAdd, priority, completedTasks, setPriority } = useTasks();

  const filtered = filteredTasks(completedTasks, priority);

  useEffect(() => {
    setPriority("all");
  }, []);

  return (
    <main className="m-6 h-full">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Completed Tasks</h1>
        <Filters />
      </div>

      <motion.div
        className="pb-[2rem] mt-6 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[1.5rem]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {filtered.map((task: Task, i: number) => (
          <TaskItem key={i} task={task} />
        ))}
        <motion.button
          className="h-[16rem] w-full py-2 rounded-md text-lg font-medium text-gray-500 border-dashed border-2 border-gray-400
      hover:bg-gray-300 hover:border-none transition duration-200 ease-in-out"
          onClick={openModalForAdd}
          variants={item}
        >
          Add New Task
        </motion.button>
      </motion.div>
    </main>
  );
}
