import { styled } from '../theme'

export default styled.div`
    width: 100%;
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;

    background: repeating-linear-gradient(
      0deg,
      hsla(0, 0%, 0%, 0.15)
    );

    pointer-events: none;
`
// scan lines are written in SCSS, need to convert to pure css
// background: repeating-linear-gradient(
//     0deg,
//     rgba(black, 0.15),
//     rgba(black, 0.15) 1px,
//     transparent 1px,
//     transparent 2px
//   );
