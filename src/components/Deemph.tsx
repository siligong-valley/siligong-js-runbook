import { styled } from "../theme";

export default styled.span(props => `
    color: ${props.theme.color.text[1]};
    text-shadow: ${props.theme.boxShadow[1]};
`)