import { Container, VisitPage } from "./styles"
import logo from "../../assets/logo.svg"

export function Header() {
    return(
        <Container>
            <div className="content">
                <div>
                    <img src={logo} alt="" />
                    <p>Start</p>
                </div>
                <nav>
                    <VisitPage to="/">Home</VisitPage>
                    <VisitPage to="/portfolio">Portfolio</VisitPage>
                    <VisitPage to="/services">Services</VisitPage>
                    <VisitPage to="/contact">Contact</VisitPage>
                </nav>
                <div className="bar-container">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </Container>
    )
}