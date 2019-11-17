import React, { useEffect, useState, FC } from 'react'
import moment from 'moment'
import { styled, css } from '../theme'
import blinkAnimation from '../util/blinkAnimation'

let intervalId: number

const Section = styled.section`
    width: 100%;

    display: flex;
    align-items: flex-end;
`

const Bold = styled.em<{ isWarning: boolean }>(props => `
    font-size: ${props.theme.fontSize[4]};
    line-height: 1.1;
    font-weight: ${props.theme.fontWeight.bold};
    color: ${props.isWarning ? props.theme.color.warning[0] : `currentColor`};
    text-shadow: 0 0 5px ${props.isWarning ? props.theme.color.warning[0] : `currentColor`};
    
    ${props.isWarning && css`
        ${blinkAnimation};
    `};
`)

interface PropsType {
    startingSeconds: number
}

const Countdown: FC<PropsType> = ({
    startingSeconds
}) => {
    const [seconds, setSeconds] = useState(startingSeconds)

    useEffect(() => {
        intervalId = setInterval(countDown, 1000)
        return stopCountdown
    }, [])

    const countDown = () => {
        setSeconds((currentSeconds) => {
            if (currentSeconds < 1) {
                clearInterval(intervalId)
                return 0
            }

            return currentSeconds - 1
        })
    }

    const stopCountdown = () => {
        if (!!intervalId) {
            clearInterval(intervalId)
        }
    }

    const isWarning = seconds < 120
    const secondsAsTime = moment().startOf('day')
        .seconds(seconds)
        .format('HH:mm:ss');

    return (
        <Section>
            Starting in&nbsp;<Bold isWarning={isWarning}>{secondsAsTime}</Bold>
        </Section>
    )
}

export default Countdown