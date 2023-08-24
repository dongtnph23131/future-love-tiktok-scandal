import { createBrowserRouter } from "react-router-dom";
import HomePgae from "./pages/HomePgae";
import Profile from "./pages/Profile";

const routers = createBrowserRouter([
    { path: '', element: <HomePgae /> },
    { path: 'profile', element: <Profile /> }

])
export default routers