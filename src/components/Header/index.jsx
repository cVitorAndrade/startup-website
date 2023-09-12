import { Container, VisitPage } from "./styles"
import logo from "../../assets/logo.svg"

import { useState } from "react"

export function Header() {

    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    }
    
    window.addEventListener('resize', () => setActive(false))


    return(
        <Container>
            <div className="content">
                <VisitPage to="/">
                    <img src={logo} alt="" />
                    <p>Start</p>
                </VisitPage>
                <nav className={active ? 'active' : ''}>
                    <div className="links">
                        <VisitPage to="/">Home</VisitPage>
                        <VisitPage to="/portfolio">Portfolio</VisitPage>
                        <VisitPage to="/services">Services</VisitPage>
                        <VisitPage to="/contact">Contact</VisitPage>
                    </div>

                    <div className="bar-container" onClick={handleClick}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                </nav>
                
            </div>
        </Container>
    )
}