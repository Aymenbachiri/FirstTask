"use client";

import { useTasks } from "@/lib/context/taskContext";
import { useDetectOutside } from "@/lib/hooks/useDetectOutside";
import { cn } from "@/lib/utils/utils";
import { useEffect, useRef } from "react";

interface TaskFormData {
  title: string;
  description: string;
  priority: "low" | "medium" | "high";
  dueDate: string;
  completed: boolean;
  id?: string;
}

const defaultTaskState: TaskFormData = {
  title: "",
  description: "",
  priority: "low",
  dueDate: new Date().toISOString().split("T")[0],
  completed: false,
};

export function Modal() {
  const {
    task,
    handleInput,
    createTask,
    isEditing,
    closeModal,
    modalMode,
    activeTask,
    updateTask,
  } = useTasks();

  const ref = useRef<HTMLFormElement>(null);

  // Use the hook to detect clicks outside the modal
  useDetectOutside({
    ref,
    callback: () => {
      if (isEditing) {
        closeModal();
      }
    },
  });

  useEffect(() => {
    if (modalMode === "edit" && activeTask) {
      // Ensure all required fields are present when editing
      const formattedTask = {
        ...defaultTaskState,
        ...activeTask,
        dueDate: activeTask.dueDate || defaultTaskState.dueDate,
      };
      handleInput("setTask")(formattedTask);
    } else if (modalMode === "add") {
      // Reset to default state when adding
      handleInput("setTask")(defaultTaskState);
    }
  }, [modalMode, activeTask, handleInput]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      ...defaultTaskState,
      ...task,
      completed: task.completed === "true" || task.completed === true,
    };

    if (modalMode === "edit" && task._id) {
      updateTask(formData);
    } else if (modalMode === "add") {
      createTask(formData);
    }
    closeModal();
  };

  return (
    <main className="fixed left-0 top-0 z-50 h-full w-full bg-[#333]/30 overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="py-5 px-6 max-w-[520px] w-full flex flex-col gap-3 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md"
        ref={ref}
      >
        <section className="flex flex-col gap-1">
          <label htmlFor="title">Title</label>
          <input
            className="bg-[#F9F9F9] p-2 rounded-md border"
            type="text"
            id="title"
            placeholder="Task Title"
            name="title"
            value={task.title || ""}
            onChange={(e) => handleInput("title")(e)}
            required
          />
        </section>
        <section className="flex flex-col gap-1">
          <label htmlFor="description">Description</label>
          <textarea
            className="bg-[#F9F9F9] p-2 rounded-md border resize-none"
            name="description"
            placeholder="Task Description"
            rows={4}
            value={task.description || ""}
            onChange={(e) => handleInput("description")(e)}
          />
        </section>
        <section className="flex flex-col gap-1">
          <label htmlFor="priority">Select Priority</label>
          <select
            className="bg-[#F9F9F9] p-2 rounded-md border cursor-pointer"
            name="priority"
            value={task.priority || "low"}
            onChange={(e) => handleInput("priority")(e)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </section>
        <section className="flex flex-col gap-1">
          <label htmlFor="dueDate">Due Date</label>
          <input
            className="bg-[#F9F9F9] p-2 rounded-md border"
            type="date"
            name="dueDate"
            value={task.dueDate || defaultTaskState.dueDate}
            onChange={(e) => handleInput("dueDate")(e)}
          />
        </section>
        <section className="flex flex-col gap-1">
          <label htmlFor="completed">Task Completed</label>
          <div className="flex items-center justify-between bg-[#F9F9F9] p-2 rounded-md border">
            <label htmlFor="completed">Completed</label>
            <div>
              <select
                className="bg-[#F9F9F9] p-2 rounded-md border cursor-pointer"
                name="completed"
                value={String(task.completed || false)}
                onChange={(e) => handleInput("completed")(e)}
              >
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <button
            type="submit"
            className={cn(
              "text-white py-2 rounded-md w-full hover:bg-blue-500 transition duration-200 ease-in-out",
              modalMode === "edit" ? "bg-blue-400" : "bg-green-400"
            )}
          >
            {modalMode === "edit" ? "Update Task" : "Create Task"}
          </button>
        </section>
      </form>
    </main>
  );
}
