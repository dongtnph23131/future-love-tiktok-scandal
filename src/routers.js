import { createBrowserRouter } from "react-router-dom";
import HomePgae from "./pages/HomePgae";
import Profile from "./pages/Profile";
const routers = createBrowserRouter([
    { path: 'tiktok/:idVideo', element: <HomePgae /> },
    { path: '', element: <Profile /> }

])
export default routers