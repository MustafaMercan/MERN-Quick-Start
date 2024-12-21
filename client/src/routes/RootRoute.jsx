import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./publicRoute";
import PrivateRoute from "./privateRoute";
import NotFound from "../pages/shared/NotFound";


const RootRoute = () => {
    console.log('root route')

    return (
        <Router>
            <Routes>
                {/* Public Route'lar */}
                <Route path="/*" element={<PublicRoute />} />

                {/* Private Route'lar */}
                <Route path="/private/*" element={<PrivateRoute />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default RootRoute;