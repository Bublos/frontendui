import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { UserPage, UserEditPage, UserRolesEditPage, GroupPage, GroupEditPage, GroupRolesEditPage } from "./Pages";
import { SearchPage } from "./Pages/SearchPage";
import { EventPage } from "./Pages/EventPage";
import { EventEditPage } from "./Pages/EventEditPage";

// import { UserPage, GroupPage } from "./Pages";

export const Routes = [
    {
        path: "/",
        errorElement: <SearchPage />,
        element: <SearchPage />
    },
    {
        path: "/user/view/:id",
        element: <UserPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/event/view/:id",
        element: <EventPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/event/edit/:id",
        element: <EventEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/user/edit/:id",
        element: <UserEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/userroles/edit/:id",
        element: <UserRolesEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/group/view/:id",
        element: <GroupPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/group/edit/:id",
        element: <GroupEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/grouproles/edit/:id",
        element: <GroupRolesEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/search",
        element: <SearchPage />,
        errorElement: <SearchPage />,
    },
    {
      path: "/search/:phrase",
      element: <SearchPage />,
      errorElement: <SearchPage />,
    },    
]

const router = createBrowserRouter(Routes, {basename: "/ug"});
// const router = createBrowserRouter(Routes);
export const AppRouter = () => <RouterProvider router={router} />