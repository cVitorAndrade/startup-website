import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionTitleAndMultipleFields } from "../../components/SectionTitleAndMultipleFields";

import { BsCheckLg } from "react-icons/bs"
import { Button } from "../../components/Button";

export function Services() {
    return(
        <Container>
            <Header />
            <SectionTitleAndMultipleFields>
                <div className="text">
                    <h3>Plans</h3>
                    <h2>Our Services</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="wrapper">
                    <div className="plan">
                        <h4>Basic</h4>
                        <p>$100 <span>/month</span></p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>

                        <ul className="benefits">
                            <li><BsCheckLg size={20}/> Lorem ipsum, dolor sit </li>
                            <li><BsCheckLg size={20} /> Lorem ipsum, dolor sit </li>
                            <li><BsCheckLg size={20} /> Lorem ipsum, dolor sit </li>
                            <li><BsCheckLg size={20} /> Lorem ipsum, dolor sit </li>
                            <li><BsCheckLg size={20} /> Lorem ipsum, dolor sit </li>
                        </ul>
                        <Button />
                    </div>

                    <div className="plan">
                        <h4>Plus</h4>
                        <p>$250 <span>/month</span></p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>

                        <ul className="benefits">
                            <li><BsCheckLg size={20}/> Lorem ipsum, dolor sit </li>
                            <li><BsCheckLg size={20} /> Lorem ipsum, dolor sit </li>
                            <li><BsCheckLg size={20} /> Lorem ipsum, dolor sit </li>
                            <li><BsCheckLg size={20} /> Lorem ipsum, dolor sit </li>
                            <li><BsCheckLg size={20} /> Lorem ipsum, dolor sit </li>
                        </ul>
                        <Button />
                    </div>

                    <div className="plan">
                        <h4>Pro</h4>
                        <p>$400 <span>/month</span></p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>

                        <ul className="benefits">
                            <li><BsCheckLg size={20}/> Lorem ipsum, dolor sit </li>
                            <li><BsCheckLg size={20} /> Lorem ipsum, dolor sit </li>
                            <li><BsCheckLg size={20} /> Lorem ipsum, dolor sit </li>
                            <li><BsCheckLg size={20} /> Lorem ipsum, dolor sit </li>
                            <li><BsCheckLg size={20} /> Lorem ipsum, dolor sit </li>
                        </ul>
                        <Button />
                    </div>
                </div>
            </SectionTitleAndMultipleFields>
            <Footer />
        </Container>
    )
}