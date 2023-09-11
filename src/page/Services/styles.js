import { styled } from "styled-components";
export const Container = styled.div`
    width: 100%;

    .plan {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: min(100%, 37rem);
        padding: 4.6rem 0;
        border-radius: 5px;

        -webkit-box-shadow: 8px 5px 13px 0px rgba(33,37,41,0.48);
        -moz-box-shadow: 8px 5px 13px 0px rgba(33,37,41,0.48);
        box-shadow: 3px 1px 13px 0px rgba(33,37,41,0.48);

        h4 {
            font-weight: 400;
            color: #000;
            line-height: 125%;
            font-size: 1.5rem;
        }

        h4 + p {
            font-weight: 700;
            color: #000;
            font-size: 4rem;
            line-height: 125%;
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-top: ;

            span {
                font-size: 1.5rem;
                color: ${ ({ theme }) => theme.COLORS.BLACK_50};
                font-weight: 400;
            }
        }

        p + p {
            max-width: 28rem;
            color: ${ ({ theme }) => theme.COLORS.BLACK_50};
            font-size: 1.5rem;
            margin: 1rem 0 5rem;
            
        }

        .benefits {
            display: flex;
            gap: 1rem;
            flex-direction: column;
            margin-bottom: 4.5rem;

            li {
                display: flex;
                align-items: center;
                gap: 1rem;

                svg {
                    color: ${ ({ theme }) => theme.COLORS.GREEN_100};
                }
            }
        }
    }
`;