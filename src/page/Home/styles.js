import { styled } from "styled-components";
export const Container = styled.div`
    width: 100%;

    .team {
        .wrapper {
            gap: 3.5rem;
        }

        .member {
            -webkit-box-shadow: 8px 5px 13px 0px rgba(33,37,41,0.48);
            -moz-box-shadow: 8px 5px 13px 0px rgba(33,37,41,0.48);
            box-shadow: 3px 1px 13px 0px rgba(33,37,41,0.48);

            padding: 2rem 2.5rem;
            text-align: left;

            img {
                border-radius: 50%;
                border: 1px solid ${ ({ theme }) => theme.COLORS.BLACK_100};
            }

            h3 {
                font-family: 'Crimson Text', serif;
                font-weight: 700;
                font-size: 2.4rem;
                line-height: 125%;
                margin: 1.9rem 0 1.7rem;
            }

            p {
                font-size: 1.5rem;
                font-weight: 400;
                line-height: 125%;
                color: ${ ({ theme }) => theme.COLORS.BLACK_75};
            }
        }
    }


    @media(min-width: 660px) {
        .partners .text {
            h2 {
                font-size: 4rem;
            }
        }

        .team .wrapper {
            gap: 4.7rem;
        }
    }

`;

export const Welcome = styled.div`
    background-color: ${ ({ theme }) => theme.COLORS.GREEN_100};
    width: 100%;
    padding-bottom: 4rem;

    > div {
        display: flex;
        flex-direction: column;
        max-width: min(90%, 144rem);
        margin: 3rem auto 0;

        img {
            width: 100%;
            margin-bottom: 3rem;
        }
    }

    .text h3 {
        font-size: 1.6rem;
        font-weight: 700;
        color: ${ ({ theme }) => theme.COLORS.WHITE_100};

        letter-spacing: 5px;
        line-height: 125%;
        text-transform: uppercase;
    }

    .text h2 {
        font-family: 'Crimson Text', serif;
        font-size: 2.8rem;
        font-weight: 700;
        line-height: 125%;
        color: ${ ({ theme }) => theme.COLORS.WHITE_100};
        margin: 1.5rem 0;
    }

    .text p {
        color: ${ ({ theme }) => theme.COLORS.WHITE_100};
        font-size: 1.5rem;
        line-height: 125%;
        margin-bottom: 3rem;
        text-align: justify;
    }

    .text a {
        padding: 1.3rem 4.8rem 1rem;
        font-size: 2rem;
        line-height: 125%;
        background-color: ${ ({ theme }) => theme.COLORS.WHITE_100};
        color: #000000;
        border-radius: 5px;
    }

    @media(min-width: 660px) {
        padding-bottom: 6rem;
        margin-bottom: 6rem;
        > div {
            flex-direction: row-reverse;
            align-items: center;
            justify-content: space-between;
            img {
                width: 50%;
            }
        }

        .text {
            max-width: 41.6rem;

            h2 {
                font-size: 4rem;
            }
        }
    }
`;


export const Section = styled.section`
    width: min(90%, 144rem);
    margin: 6rem auto 0;

    img {
        width: 100%;
    }

    .section-text {
        > h2 {
            color: ${ ({ theme }) => theme.COLORS.BLACK_100};
            font-weight: 700;
            line-height: 125%;
            font-size: 2.4rem;
            font-family: 'Crimson Text', serif;
            margin: 3rem 0 2rem;
        }

        > p {
            color: ${ ({ theme }) => theme.COLORS.BLACK_50};
            font-size: 1.5rem;
            font-weight: 400;
            line-height: 125%;
            margin-bottom: 2rem;
        }
    }

        section + & {
            margin-bottom: 4rem;
        }

    @media(min-width: 660px) {
        display: flex;
        align-items: center;
        gap: 10rem;

        img {
            width: 50%;
        }

        .section-text {
            max-width: 47rem;

            h2 {
                font-size: 40px;
            }
            
            p {
                margin: 2.5rem 0;
            }
        }

        section + & {
            flex-direction: row-reverse;
            margin-bottom: 10.5rem;
        }
    }
`;

