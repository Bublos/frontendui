import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { UserPage, UserEditPage, UserRolesEditPage, GroupPage, GroupEditPage, GroupRolesEditPage } from "./Pages";
import { SearchPage } from "./Pages/SearchPage";
import { EventPage } from "./Pages/EventPage";
import { EventEditPage } from "./Pages/EventEditPage";
import { EventPresencesPage } from "./Pages/EventPresencesPage";
import { base } from "./config";

// import { UserPage, GroupPage } from "./Pages";

export const Routes = [
    {
        path: base + "/",
        errorElement: <SearchPage />,
        element: <SearchPage />
    },
    {
        path: base + "/user/view/:id",
        element: <UserPage />,
        errorElement: <SearchPage />,
    },
    {
        path: base + "/event/view/:id",
        element: <EventPage />,
        errorElement: <SearchPage />,
    },
    {
        path: base + "/eventpresences/view/:id",
        element: <EventPresencesPage />,
        errorElement: <SearchPage />,
    },
    {
        path: base + "/event/edit/:id",
        element: <EventEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path:base + "/user/edit/:id",
        element: <UserEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: base + "/userroles/edit/:id",
        element: <UserRolesEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: base + "/group/view/:id",
        element: <GroupPage />,
        errorElement: <SearchPage />,
    },
    {
        path: base + "/group/edit/:id",
        element: <GroupEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: base + "/grouproles/edit/:id",
        element: <GroupRolesEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: base + "/search",
        element: <SearchPage />,
        errorElement: <SearchPage />,
    },
    {
      path: base + "/search/:phrase",
      element: <SearchPage />,
      errorElement: <SearchPage />,
    },    
]

//const router = createBrowserRouter(Routes, {basename: "/events"});
const router = createBrowserRouter(Routes);
export const AppRouter = () => <RouterProvider router={router} />