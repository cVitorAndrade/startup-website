import { Container } from "./styles";

import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SectionTitleAndMultipleFields } from "../../components/SectionTitleAndMultipleFields";

import location from "../../assets/location.png"

export function Contact() {
    return(
        <Container>
            <Header />
            <SectionTitleAndMultipleFields className="location">
                <div className="text">
                    <h2>Contact Us</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>

                
                <div className="wrapper">
                    <form>

                        <div className="input-wrapper">
                            <label htmlFor="name">Name</label>
                            <input type="text"  id="name" />
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" />
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="message">Name</label>
                            <textarea id="message" ></textarea>
                        </div>                        

                        <Button title="submit" />
                    </form>
                    <img src={location} alt="" />
                </div>

            </SectionTitleAndMultipleFields>
            <Footer />
        </Container>
    )
}