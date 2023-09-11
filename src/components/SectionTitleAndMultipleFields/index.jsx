import { Container } from "./styles"
export function SectionTitleAndMultipleFields({ children, ...rest }) {
    return(
        <Container {...rest}>
            {children}
        </Container>
    )
}