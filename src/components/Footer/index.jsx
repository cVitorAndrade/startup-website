import { Container } from "./styles";

import pinterestIcon from "../../assets/social-medias/pinterest.svg"
import facebookIcon from "../../assets/social-medias/facebook.svg"
import instagramIcon from "../../assets/social-medias/instagram.svg"
import tiktokIcon from "../../assets/social-medias/tiktok.svg"
import twitterIcon from "../../assets/social-medias/twitter.svg"
import whatsappIcon from "../../assets/social-medias/whatsapp.svg"
import youtubeIcon from "../../assets/social-medias/youtube.svg"

export function Footer() {
    return(
        <Container>
            <div className="content">
                <ul>
                    <li>
                        <a href="">
                            <img src={facebookIcon} alt="" />
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <img src={instagramIcon} alt="" />
                        </a>
                    </li>
                    
                    <li>
                        <a href="">
                            <img src={twitterIcon} alt="" />
                        </a>
                    </li>
                    
                    <li>
                        <a href="">
                            <img src={pinterestIcon} alt="" />
                        </a>
                    </li>
                    
                    <li>
                        <a href="">
                            <img src={tiktokIcon} alt="" />
                        </a>
                    </li>
                    
                    <li>
                        <a href="">
                            <img src={whatsappIcon} alt="" />
                        </a>
                    </li>
                    
                    <li>
                        <a href="">
                            <img src={youtubeIcon} alt="" />
                        </a>
                    </li>
                </ul>
                <p>© Start, 2022. All rights reserved.</p>
            </div>
        </Container>
    )
}