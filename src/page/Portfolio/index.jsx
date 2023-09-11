import { Container } from "./styles";

import { SectionTitleAndMultipleFields } from "../../components/SectionTitleAndMultipleFields";
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button";

import landingPage from "../../assets/works/landing-page.svg";
import webDesign from "../../assets/works/web-design.svg";
import rocket from "../../assets/works/rocket.svg";
import shopping from "../../assets/works/shopping.svg";
import geometricShapes from "../../assets/works/geometric-shapes.svg";
import trick from "../../assets/works/trick.svg";
import virtualReality from "../../assets/works/virtual-reality.png";
import halloween from "../../assets/works/halloween.svg";

export function Portfolio() {
    return(
        <Container>
            <Header />

            <SectionTitleAndMultipleFields className="works">
                <div className="text">
                    <h3>Works</h3>
                    <h2>Portfólio</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="wrapper">
                    <img src={landingPage} alt="" />
                    <img src={webDesign} alt="" />
                    <img src={rocket} alt="" />
                    <img src={shopping} alt="" />
                    <img src={geometricShapes} alt="" />
                    <img src={trick} alt="" />
                    <img src={halloween} alt="" />
                    <img src={virtualReality} alt="" />
                </div>
                <Button />
            </SectionTitleAndMultipleFields>

            <Footer />
        </Container>
    )
}