import TaskCard from "@/module/tasks/TaskCard";
import { AddTaskModal } from "@/module/tasks/AddTaskModal";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {

    const tasks = useAppSelector(selectTasks);
    console.log("tasks from Task.tsx:", tasks)

    return (
        <div className="mx-auto max-w-7xl px-5 mt-8 mb-20">
            <div className="flex justify-between items-center">
                <h1>Tasks</h1>
                <AddTaskModal></AddTaskModal>
            </div>
            <div className="space-y-5 mt-5">
                {
                    tasks.map((task) => (
                        <TaskCard key={task.id} task={task} ></TaskCard>
                    ))
                }
            </div>
           
        </div>
    );
};

export default Tasks;