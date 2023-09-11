import { Routes, Route } from "react-router-dom";

import { Home } from "../page/Home"
import { Portfolio } from "../page/Portfolio";
import { Services } from "../page/Services";
import { Contact } from "../page/Contact";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={ <Home /> }/>
            <Route path="/portfolio" element={ <Portfolio /> }/>
            <Route path="/services" element={ <Services /> } />
            <Route path="/contact" element={ <Contact /> } />
        </Routes>
    )
}