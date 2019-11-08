import styled from 'styled-components'

export default styled.h1`
    margin: 0;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    font-family: Arial, Helvetica, sans-serif;
    font-size: ${p => p.theme.fontSize[5]};
    font-weight: 700;
    line-height: 1.333;
`