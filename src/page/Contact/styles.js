import { styled } from "styled-components";
export const Container = styled.div`
    width: 100%;

    form {
        width: min(100%, 57.5rem);
    }

    .location {
        .wrapper {

            flex-wrap: wrap-reverse;

            img {
                width: min(100%, 57.5rem);
            }
        }
    }

    .input-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.6rem;

        label {
            color: #000;
            font-size: 2rem;
            line-height: 125%;
        }

        input, textarea {
            width: 100%;
            height: 3.8rem;
            border: 1px solid #000;
            border-radius: 5px;
            background-color: #EEEEEE;
            outline-color: ${ ({ theme }) => theme.COLORS.GREEN_50};
            padding: 1.6rem;
        }

        input {
            margin-bottom: 2rem;
        }

        textarea {
            height: 14rem;
            resize: none;
        }
    }

    a {
        width: 100%;
        margin-top: 3rem;
    }
`;