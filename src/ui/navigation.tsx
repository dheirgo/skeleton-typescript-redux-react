import { lazy } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";

export enum NavigationRoutes {
    Main = "/",
    Insurances = "/insurances"
}

const Insurances = lazy(() => import('./pages/InsurancePage'));
const Main = lazy(() => import('./pages/MainPage'));

const routes = [
    <Route key={NavigationRoutes.Main} path={NavigationRoutes.Main} element={<Main />} />,
    <Route key={NavigationRoutes.Insurances} path={NavigationRoutes.Insurances} element={<Insurances />}/>
];

const AppNavigation = () => (
    <BrowserRouter>
        <Routes>
            {routes}
        </Routes>
    </BrowserRouter>
)

export default AppNavigation;