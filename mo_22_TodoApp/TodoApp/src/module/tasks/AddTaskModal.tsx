import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DialogDescription } from "@radix-ui/react-dialog"
import { useForm } from "react-hook-form"


export function AddTaskModal() {

    const form = useForm()

    const onSubmit = (data: any) =>{
        console.log(data)
    }

  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button>Add Task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogDescription className="sr-only"> Fill Up This Form to Add Task</DialogDescription>
          <DialogHeader>
            <DialogTitle>Add Task</DialogTitle>
          </DialogHeader>
        
          <Form {...form}>

            <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="title"
                    render={({field}) => (
                    <FormItem className="mb-4">
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                        <Input {...field} value={field.value || " "}/>
                        </FormControl>
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="Description"
                    render={({field}) => (
                    <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                            <Textarea {...field} value={field.value || " "}/>
                        </FormControl>
                    </FormItem>
                    )}
                />
                <DialogFooter className="mt-4">
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </form>

          </Form>
          
        </DialogContent>
    </Dialog>
  )
}
