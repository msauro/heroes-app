import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../login/LoginScreen";
import { DaschboardRoutes } from "./DaschboardRoutes";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <h1>Welcome to React Router!</h1>
            <Routes>
                
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/*" element= {<DaschboardRoutes />} />
            
            </Routes>
            
        </BrowserRouter>
    )
}
