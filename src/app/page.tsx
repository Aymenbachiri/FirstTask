import { Filters } from "@/components/Filters";
import { TaskItem } from "@/components/TaskItem";

export default function Home() {
  const tasks = [
    {
      id: "1",
      title: "Task 1",
      description: "Task 1 description",
      status: "pending",
      completed: false,
      dueDate: "2023-05-01",
      priority: "medium",
      createdAt: "2023-05-01",
      updatedAt: "2023-05-01",
    },
    {
      id: "2",
      title: "Task 2",
      description: "Task 2 description",
      status: "completed",
      completed: true,
      dueDate: "2023-05-02",
      priority: "high",
      createdAt: "2023-05-02",
      updatedAt: "2023-05-02",
    },
    {
      id: "3",
      title: "Task 3",
      description: "Task 3 description",
      status: "pending",
      completed: false,
      dueDate: "2023-05-03",
      priority: "low",
      createdAt: "2023-05-03",
      updatedAt: "2023-05-03",
    },
    {
      id: "4",
      title: "Task 4",
      description: "Task 4 description",
      status: "completed",
      completed: true,
      dueDate: "2023-05-04",
      priority: "medium",
      createdAt: "2023-05-04",
      updatedAt: "2023-05-04",
    },
    {
      id: "5",
      title: "Task 5",
      description: "Task 5 description",
      status: "pending",
      completed: false,
      dueDate: "2023-05-05",
      priority: "high",
      createdAt: "2023-05-05",
      updatedAt: "2023-05-05",
    },
  ];

  return (
    <main className="m-6 h-full">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">All Tasks</h1>
        <Filters />
      </div>

      <div className="pb-[2rem] mt-6 grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[1.5rem]">
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
        <button
          className="h-[16rem] w-full py-2 rounded-md text-lg font-medium text-gray-500 border-dashed border-2 border-gray-400
          hover:bg-gray-300 hover:border-none transition duration-200 ease-in-out"
        >
          Add New Task
        </button>
      </div>
    </main>
  );
}
