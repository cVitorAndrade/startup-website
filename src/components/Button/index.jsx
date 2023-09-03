import { Container } from "./styles";
export function Button({ title = "Learn more" }) {
    return(
        <Container>
            {title}
        </Container>
    )
}