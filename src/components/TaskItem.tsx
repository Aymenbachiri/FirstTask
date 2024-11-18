"use client";

import { useTasks } from "@/lib/context/taskContext";
import { EditIcon } from "@/lib/icons/EditIcon";
import { StarIcon } from "@/lib/icons/StarIcon";
import { TrashIcon } from "@/lib/icons/TrashIcon";
import { item } from "@/lib/utils/animations";
import { cn } from "@/lib/utils/utils";
import { motion } from "framer-motion";

type Task = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority?: "low" | "medium" | "high";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // For additional properties
};

export function TaskItem({ task }: { task: Task }) {
  const { getTask, openModalForEdit, deleteTask } = useTasks();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "low":
        return "text-green-500";
      case "medium":
        return "text-yellow-500";
      case "high":
        return "text-red-500";
      default:
        return "text-red-500";
    }
  };

  return (
    <motion.main
      variants={item}
      className="h-[16rem] px-4 py-3 flex flex-col gap-4 shadow-sm bg-[#f9f9f9] rounded-lg border-2 border-white"
    >
      <section>
        <h4 className="font-bold text-2xl">{task.title}</h4>
        <p>{task.description}</p>
      </section>
      <div className="mt-auto flex justify-between items-center">
        <p className="text-sm text-gray-400">{task.createdAt}</p>
        <p
          className={cn("text-sm font-bold", getPriorityColor(task.priority!))}
        >
          {task.priority}
        </p>
        <section className="flex items-center gap-2">
          <button
            className={cn(task.completed ? "text-yellow-400" : "text-gray-400")}
          >
            <StarIcon />
          </button>
          <button
            onClick={() => {
              getTask(task.id);
              openModalForEdit(task);
            }}
            className="text-[#00A1F1]"
          >
            <EditIcon />
          </button>
          <button
            onClick={() => {
              deleteTask(task.id);
            }}
            className="text-[#F65314]"
          >
            <TrashIcon />
          </button>
        </section>
      </div>
    </motion.main>
  );
}
