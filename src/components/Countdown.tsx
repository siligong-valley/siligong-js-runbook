import React, { useEffect, useState, FC } from 'react'
import moment from 'moment'
import { styled } from '../theme'

let intervalId: number

const Section = styled.section`
    width: 100%;

    display: flex;
`

const Bold = styled.em(props => `
    font-weight: ${props.theme.fontWeight.bold};
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

    const secondsAsTime = moment().startOf('day')
        .seconds(seconds)
        .format('HH:mm:ss');

    return (
        <Section>
            Starting in&nbsp;<Bold>{secondsAsTime}</Bold>
        </Section>
    )
}

export default Countdown