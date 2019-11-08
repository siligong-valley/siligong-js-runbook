import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'

let intervalId

const Section = styled.section`
    width: 100%;

    display: flex;
    justify-content: center;
`

export default ({
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
        .format('H:mm:ss');

    return (
        <Section>
            Starting in
            <br />
            {secondsAsTime}
        </Section>
    )
}