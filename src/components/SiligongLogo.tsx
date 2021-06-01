import React from "react";
import { styled, gridGutters } from "../theme";

const Wrapper = styled.section(
  (props) => `
    width: ${gridGutters(11)};
    height: ${gridGutters(5)};
    padding: ${gridGutters(0.75)};

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    font-size: ${props.theme.fontSize[1]};

    background: ${props.theme.color.yellow[0]};
    box-shadow: ${props.theme.boxShadow[0]};
`
);

const Span = styled.span(
  (props) => `
    line-height: 1;
    font-weight: ${props.theme.fontWeight.bold};
    color: ${props.theme.color.background[0]};
    text-shadow: none;
`
);

export default () => (
  <Wrapper>
    <Span>siligong.dev</Span>
  </Wrapper>
);
