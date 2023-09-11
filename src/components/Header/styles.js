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

        > div:first-child {
            display: flex;
            align-items: center;
    
             p {
                color: ${ ({ theme }) => theme.COLORS.WHITE_100};
                font-size: 3rem;
                line-height: 125%;
                margin-left: 1rem;
                font-weight: 500;
            }
        }

        > nav {
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
    }





    @media(min-width: 568px) {
        .content {
            padding: 3.5rem 0;

            > div:first-child {
                > p {
                    font-size: 4rem;
                }
            }

            > nav {
                display: flex;
            }

            .bar-container {
                display: none;
            }
        }
    }
`;

export const VisitPage = styled(Link)`
    grid-area: newnote;
    
    background-color: ${ ({ theme }) => theme.COLORS.ORANGE};
    color: ${ ({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
        margin-right: 8px;
    }
`;