import { Container } from "./styles"
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
                    <a href="/">Home</a>
                    <a href="/">Portfolio</a>
                    <a href="/">Services</a>
                    <a href="/">Contact</a>
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