import { Container, Section,  Welcome } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Footer } from "../../components/Footer"
import { SectionTitleAndMultipleFields } from "../../components/SectionTitleAndMultipleFields"

import groupImage from "../../assets/welcome/Group.png"
import threePersons from "../../assets/three-persons.png"
import man from "../../assets/man.png"


//partners
import google from "../../assets/partners/google.svg"
import facebook from "../../assets/partners/facebook.svg"
import airbnb from "../../assets/partners/airbnb.svg"
import microsoft from "../../assets/partners/microsoft.svg"
import spotify from "../../assets/partners/spotify.svg"

// team members
import alexandra from "../../assets/team/Alexandra-Stolz.png"
import janet from "../../assets/team/Janet-Bray.png"
import peg from "../../assets/team/Peg-Legge.png"
import richard from "../../assets/team/Richard-Guerra.png"

export function Home() {
    return(
        <Container>
            <Welcome>
                <Header />
                <div>
                    <img src={groupImage} alt="" />
                    <div className="text">
                        <h3>Welcome</h3>
                        <h2>Lorem ipsum dolor sit amet consectetur </h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                        <a href="/">Explore</a>
                    </div>
                </div>
            </Welcome>

            <SectionTitleAndMultipleFields className="partners">
                <div className="text">
                    <h3>Partners</h3>
                    <h2>Lorem Ipsum Dolor</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="wrapper">
                    <img src={google} alt="" />
                    <img src={microsoft} alt="" />
                    <img src={airbnb} alt="" />
                    <img src={facebook} alt="" />
                    <img src={spotify} alt="" />
                </div>
                <Button />
            </SectionTitleAndMultipleFields>

            <Section>
                <img src={threePersons} alt="" />
                <div className="section-text">
                    <h2>Lorem ipsum dolor sit amet consectetur </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                    <Button />
                </div>
            </Section>

            <Section>
                <img src={man} alt="" />
                <div className="section-text">
                    <h2>Lorem ipsum dolor sit amet consectetur </h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
                    <Button />
                </div>
            </Section>

            <SectionTitleAndMultipleFields className="team">
                <div className="text">
                    <h3>TEAMS</h3>
                    <h2>Our Talents</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur Suscipit nemo hic quos, ab,</p>
                </div>
                <div className="wrapper">
                    <div className="member">
                        <img src={peg} alt="" />
                        <h3>Peg Legge</h3>
                        <p>CEO</p>
                    </div>

                    <div className="member">
                        <img src={richard} alt="" />
                        <h3>Richard Guerra</h3>
                        <p>CTO</p>
                    </div>

                    <div className="member">
                        <img src={alexandra} alt="" />
                        <h3>Alexandra Stolz</h3>
                        <p>DESIGNER</p>
                    </div>

                    <div className="member">
                        <img src={janet} alt="" />
                        <h3>Janet Bray</h3>
                        <p>DEVELOPER</p>
                    </div>
                </div>
                <Button title="View Team"/>
            </SectionTitleAndMultipleFields>

            <Footer />

        </Container>
    )
}