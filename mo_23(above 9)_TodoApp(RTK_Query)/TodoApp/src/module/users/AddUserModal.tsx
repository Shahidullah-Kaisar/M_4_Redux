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
import { useAppDispatch } from "@/redux/hook"
import type { IUser } from "@/types"
import { DialogDescription } from "@radix-ui/react-dialog"
import { useState } from "react"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"

export function AddUsersModal() {

    const form = useForm<IUser>()
    const [open, setOpen] = useState(false)

    const dispatch = useAppDispatch()

    const handleForm: SubmitHandler<FieldValues> = (data) =>{
      setOpen(false)
      form.reset()
    }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>Add User</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogDescription className="sr-only"> Fill Up This Form to Add User</DialogDescription>
          <DialogHeader>
            <DialogTitle className="text-center">Add User</DialogTitle>
          </DialogHeader>
        
          <Form {...form}>

            <form onSubmit={form.handleSubmit(handleForm)}>

                <FormField
                    control={form.control}
                    name="name"
                    render={({field}) => (
                    <FormItem className="mb-4">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field} value={field.value || " "}/>
                        </FormControl>
                    </FormItem>
                    )}
                />
         
                <DialogFooter className="mt-4">
                    <Button type="submit">ADD</Button>
                </DialogFooter>
            </form>

          </Form>
          
        </DialogContent>
    </Dialog>
  )
}
