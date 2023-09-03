import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 52.5%;
        /* font-family: 'Crimson Text', serif; */
        font-family: 'Work Sans', sans-serif;

        --heading1: 4rem;
        --heading2: 3.2rem;
        --heading3: 2.8rem;
        --heading4: 2.4rem;
        --heading5: 2rem;
        --heading6: 1.6rem;

        --sub-heading: 2rem;

        --fs-label: 1.6rem;
    }
    
    body {
        font-size: 1.6rem;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: ${ ({ theme }) => theme.COLORS.WHITE_100};
        transition: filter .3s ease-in-out;
        display: inline-block;
    }

    a:hover {
        filter: brightness(0.9);
        cursor: pointer;
    }
`;