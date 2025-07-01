
import { AddTaskModal } from "@/module/tasks/AddTaskModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useGetTasksQuery } from "@/redux/api/baseApi";
import TaskCard from "@/module/tasks/TaskCard";
import type { ITask } from "@/types";

const Tasks = () => {

    const { data, isLoading, isError } = useGetTasksQuery(undefined, {
        pollingInterval: 3000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true,
    });
    console.log({ data , isLoading, isError } )

    
    if (isError) {
        return <p className="text-red-500 text-center mt-50">Failed to load tasks.</p>;
    }

    if(isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div className="mx-auto max-w-7xl px-5 mt-8 mb-20">
            <div className="flex justify-end items-center gap-5">
                <h1 className="mr-auto text-green-500">Tasks</h1>

                <Tabs defaultValue="all">
                    <TabsList className="grid w-full grid-cols-4">

                        <TabsTrigger 
                           
                            value="all"
                        >
                            All
                        </TabsTrigger>

                        <TabsTrigger 
                            
                            value="low">Low
                        </TabsTrigger>

                        <TabsTrigger 
                           
                            value="medium"
                        >
                            Medium
                        </TabsTrigger>

                        <TabsTrigger 
                            
                            value="high"
                        >
                            High
                        </TabsTrigger>

                    </TabsList>
                </Tabs>

                <AddTaskModal></AddTaskModal>
            </div>
            <div className="space-y-5 mt-5">
                { !isLoading && data.tasks.map((task: ITask) => (
                        <TaskCard key={task._id} task={task}></TaskCard>
                    ))
                }
            </div>
           
        </div>
    );
};

export default Tasks;