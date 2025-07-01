import TaskCard from "@/module/tasks/TaskCard";
import { AddTaskModal } from "@/module/tasks/AddTaskModal";
import { selectTasks, updateFilter } from "@/redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Tasks = () => {

    const tasks = useAppSelector(selectTasks);
    console.log("tasks from Task.tsx:", tasks)

    const dispatch = useAppDispatch();

    return (
        <div className="mx-auto max-w-7xl px-5 mt-8 mb-20">
            <div className="flex justify-end items-center gap-5">
                <h1 className="mr-auto text-green-500">Tasks</h1>

                <Tabs defaultValue="all">
                    <TabsList className="grid w-full grid-cols-4">

                        <TabsTrigger 
                            onClick={() => dispatch(updateFilter("all"))} 
                            value="all"
                        >
                            All
                        </TabsTrigger>

                        <TabsTrigger 
                            onClick={() => dispatch(updateFilter("low"))} 
                            value="low">Low
                        </TabsTrigger>

                        <TabsTrigger 
                            onClick={() => dispatch(updateFilter("medium"))} 
                            value="medium"
                        >
                            Medium
                        </TabsTrigger>

                        <TabsTrigger 
                            onClick={() => dispatch(updateFilter("high"))} 
                            value="high"
                        >
                            High
                        </TabsTrigger>

                    </TabsList>
                </Tabs>

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