import { styled } from "styled-components";
export const Container = styled.a`
    background-color: ${ ({ theme }) => theme.COLORS.BLACK_100};
    color: ${ ({ theme }) => theme.COLORS.WHITE_100};
    padding: 1.3rem 3rem 1rem;
    border-radius: 5px;
`;