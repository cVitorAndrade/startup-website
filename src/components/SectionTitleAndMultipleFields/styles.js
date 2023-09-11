import { styled } from "styled-components";
export const Container = styled.div`
    text-align: center;
    width: min(90%, 144rem);
    margin: 2.2rem auto 3rem;

    .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 4rem;
        margin-bottom: 5.5rem;
    }

    .text {

        max-width: 50rem;
        margin: 0 auto 5.5rem;

        h3 {
            color: ${ ({ theme }) => theme.COLORS.GREEN_100};
            font-size: 1.6rem;
            font-weight: 700;
            letter-spacing: 5px;
            line-height: 125%;
            text-transform: uppercase;
        }

        h2 {
            font-family: 'Crimson Text', serif;
            font-size: 2.4rem;
            font-weight: 700;
            line-height: 125%;
            margin: 1.6rem 0;
        }

        p {
            font-size: 20px;
            line-height: 125%;
            font-weight: 400;
        }
    }
    @media(min-width: 660px) {
        .text {
            h2 {
                font-size: 4rem;
            }
        }
    }
`;