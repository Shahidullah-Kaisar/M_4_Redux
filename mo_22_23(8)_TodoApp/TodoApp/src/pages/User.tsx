import { AddUsersModal } from "@/module/users/AddUserModal";
import UserCard from "@/module/users/UserCard";
import { selectusers } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

const User = () => {

    const users = useAppSelector(selectusers);
    console.log("users", users)

    return (
        <div className="mx-auto max-w-7xl px-5 mt-8 mb-20">
            <div className="flex justify-end items-center gap-5">
                <h1 className="mr-auto text-green-500">Users</h1>

                <AddUsersModal></AddUsersModal>
            </div>
            <div className="space-y-5 mt-5">
                {
                    users.map((users) => (
                        <UserCard key={users.id} user={users} ></UserCard>
                    ))
                }
            </div>
           
        </div>
    );
};

export default User;