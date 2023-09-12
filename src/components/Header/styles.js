import { Link } from "react-router-dom";
import { styled } from "styled-components";
export const Container = styled.header`
    width: 100%;
    background-color: ${ ({ theme }) => theme.COLORS.GREEN_100};
    .content {
        width: min(90%, 144rem);
        padding: 1.7rem 0;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .links {
            align-items: center;
            gap: 3rem;
            display: none;
    
            a {
                font-size: 2rem;
                line-height: 125%;
            }
        }

        .bar-container {
            cursor: pointer;
        }
    
        .bar {
            width: 2.8rem;
            background: #FFFFFF;
            height: 3px;
            display: block;
            border-radius: 2px;
            transition: all .3s ease-in-out;
            margin: 5px;
        }

        nav.active {
            .links{
                flex-direction: column;
                position: absolute;
                top: 60px;
                background-color: ${ ({ theme }) => theme.COLORS.GREEN_100};
                right: 0;
                left: 0;
                display: flex;
                padding-bottom: 3rem;
            }
        }
    }

    nav.active .bar:nth-child(2) {
        opacity: 0;
    }

    nav.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    nav.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }



    @media(min-width: 568px) {
        .content {
            padding: 3.5rem 0;

            > a:first-child {
                > p {
                    font-size: 4rem;
                }
            }

            .links {
                display: flex;
            }

            .bar-container {
                display: none;
            }
        }
    }
`;

export const VisitPage = styled(Link)`
    display: flex;
    align-items: center;
    
        p {
            color: ${ ({ theme }) => theme.COLORS.WHITE_100};
            font-size: 3rem;
            line-height: 125%;
            margin-left: 1rem;
            font-weight: 500;
    }
`;