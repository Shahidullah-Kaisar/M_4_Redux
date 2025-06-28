import TaskCard from "@/module/tasks/TaskCard";
import { AddTaskModal } from "@/redux/features/task/AddTaskModal";
import { selectTasks } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {

    const tasks = useAppSelector(selectTasks);
    console.log("tasks:", tasks)

    return (
        <div className="mx-auto max-w-7xl px-5 mt-20 mb-20">
            <div className="flex justify-between items-center">
                <h1>Tasks</h1>
                <AddTaskModal></AddTaskModal>
            </div>
            <div className="space-y-5 mt-5">
                {
                    tasks.map((task) => (
                        <TaskCard task={task} key={task.id}></TaskCard>
                    ))
                }
            </div>
           
        </div>
    );
};

export default Tasks;