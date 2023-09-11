import { Routes, Route } from "react-router-dom";

import { Home } from "../page/Home"
import { Portfolio } from "../page/Portfolio";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/portfolio" element={ <Portfolio /> }/>
        </Routes>
    )
}