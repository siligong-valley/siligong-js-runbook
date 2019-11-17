import React, { FC, useState } from 'react';
import ReactDOM from 'react-dom';
import { theme, ThemeProvider } from './theme';
import GlobalStyles from './GlobalStyles';
import slides from './slides'
import useKeyPress from './hooks/useKeyPress';
import ScanLines from './components/ScanLines'

const App: FC = () => {
    const setNextHandler = useKeyPress(['ArrowRight']);
    const setPrevHandler = useKeyPress(['ArrowLeft']);
    // FOR TESTING
    // const [slide, setSlide] = useState(0)
    const [slide, setSlide] = useState(1)
    const prev = () => setSlide(currentSlide => {
        const isStart = currentSlide === 0

        return isStart
            ? currentSlide
            : currentSlide - 1
    })
    const next = () => setSlide(currentSlide => {
        const isEnd = currentSlide === (slides.length - 1)

        return isEnd
            ? currentSlide
            : currentSlide + 1
    })

    setNextHandler(next)
    setPrevHandler(prev)

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                {slides[slide]}
                <ScanLines />
            </>
        </ThemeProvider>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));