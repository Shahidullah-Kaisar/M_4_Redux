import App from "@/App";
import Tasks from "@/pages/Tasks";
import User from "@/pages/User";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // Component: App  //also correct
    children: [
        {
            index: true, //This means the Tasks component is shown by default at the root route
            element: <Tasks></Tasks>
        },
        {
            path: "/tasks",
            element: <Tasks></Tasks>
        },
        {
            path: "/user",
            element: <User></User>
        }
    ]
  },
]);

export default router