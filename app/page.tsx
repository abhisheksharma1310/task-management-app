import dynamic from 'next/dynamic'
import CreateTask from "@/components/CreateTaskButton";

const TaskList = dynamic(() => import("@/components/TaskList"), { ssr: false })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-4 px-2 py-6 ">
      <CreateTask />
      <TaskList />
    </main>
  );
}
