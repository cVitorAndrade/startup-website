import { styled } from "styled-components";
export const Container = styled.footer`
    background-color: ${ ({ theme }) => theme.COLORS.GREEN_100};
    width: 100%;
    padding: 3rem 0;
    margin-top: 4rem;
    
    .content {
        width: min(90%, 144rem);
        margin: auto;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        p {
            font-weight: 400;
            font-size: 2rem;
            line-height: 125%;
            color: ${ ({ theme }) => theme.COLORS.WHITE_100};
        }

    }

    ul {
        display: flex;
        gap: 2rem;
    }

    @media(min-width: 660px) {
        margin-top: 5rem;

        .content {
            flex-direction: row;
            justify-content: space-between;
            padding: 4rem 0;
        }
    }
`;