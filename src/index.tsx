import React, { FC, useState } from "react";
import ReactDOM from "react-dom";
import { theme, ThemeProvider } from "./theme";
import GlobalStyles from "./GlobalStyles";
import slides from "./slides";
import useKeyPress from "./hooks/useKeyPress";
import ScanLines from "./components/ScanLines";
import toggleFullScreen from "./util/toggleFullScreen";
import HotKeys from "./components/HotKeys";

const App: FC = () => {
  const setRightArrowHandler = useKeyPress(["ArrowRight"]);
  const setLeftArrowHandler = useKeyPress(["ArrowLeft"]);
  const setFHandler = useKeyPress(["f"]);
  // TESTING
  const [slide, setSlide] = useState(0);
  // const [slide, setSlide] = useState(1);
  const [isFullScreen, setFullScreen] = useState(false);
  const prev = () =>
    setSlide((currentSlide) => {
      const isStart = currentSlide === 0;

      return isStart ? currentSlide : currentSlide - 1;
    });
  const next = () =>
    setSlide((currentSlide) => {
      const isEnd = currentSlide === slides.length - 1;

      return isEnd ? currentSlide : currentSlide + 1;
    });

  setRightArrowHandler(next);
  setLeftArrowHandler(prev);
  setFHandler(() => {
    toggleFullScreen();
    setFullScreen((cur) => !cur);
  });

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {slides[slide]}
        {!isFullScreen && <HotKeys />}
        <ScanLines />
      </>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
