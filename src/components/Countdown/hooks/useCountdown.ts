import { useState, useEffect, useCallback } from 'react'

import { addSeconds, differenceInSeconds } from 'date-fns'

export interface UseCountdownProps {
  durationTimeInSeconds: number
  startWhen?: unknown
}

export const useCountdown = ({
  durationTimeInSeconds,
  startWhen
}: UseCountdownProps) => {
  const [secondsLeft, setSecondsLeft] = useState<number>(durationTimeInSeconds)

  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60

  const formattedMinutes = minutes.toString().padStart(2, '0')
  const formattedSeconds = seconds.toString().padStart(2, '0')

  const handleChange = useCallback((value: number) => setSecondsLeft(value), [])

  useEffect(() => {
    const startTime = new Date()
    const endTime = addSeconds(startTime, durationTimeInSeconds)

    if (!startWhen && startWhen !== undefined) return

    const interval = setInterval(() => {
      const secondsDiff = differenceInSeconds(endTime, new Date())

      if (secondsDiff < 0) {
        clearInterval(interval)
        return
      }

      setSecondsLeft(secondsDiff)
    }, 1000)

    return () => clearInterval(interval)
  }, [startWhen])

  return {
    minutes,
    seconds,
    formattedTime: `${formattedMinutes}:${formattedSeconds}`,
    handleChange
  }
}
