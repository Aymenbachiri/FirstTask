import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Task } from "../types/taskType";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const filteredTasks = (tasks: Task[], priority: string) => {
  const filteredTasks = () => {
    switch (priority) {
      case "low":
        return tasks.filter((task) => task.priority === "low");
      case "medium":
        return tasks.filter((task) => task.priority === "medium");
      case "high":
        return tasks.filter((task) => task.priority === "high");
      default:
        return tasks;
    }
  };

  return filteredTasks();
};

export const overdueTasks = (tasks: Task[]) => {
  // Get today's date at midnight (start of day) for consistent comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return tasks.filter((task) => {
    if (!task.dueDate || task.completed) return false;

    // Convert task's due date to Date object and set to midnight
    const dueDate = new Date(task.dueDate);
    dueDate.setHours(0, 0, 0, 0);

    // Compare dates
    return dueDate < today;
  });
};
