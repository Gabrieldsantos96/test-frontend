import { useImperativeHandle, forwardRef, useEffect } from 'react'

import { useCountdown, UseCountdownProps } from './hooks/useCountdown'

import * as S from './styles'

export interface ICountdown {
  handleChange: (value: number) => void
}

interface CountdownProps extends UseCountdownProps {
  onFinish?: () => void
}

const Countdown: React.ForwardRefRenderFunction<ICountdown, CountdownProps> = (
  { onFinish, ...props },
  ref
) => {
  const { seconds, minutes, formattedTime, handleChange } = useCountdown(props)

  useEffect(() => {
    if (onFinish && seconds === 0 && minutes === 0) {
      onFinish()
    }
  }, [seconds, minutes, onFinish])

  useImperativeHandle(
    ref,
    () => ({
      handleChange
    }),
    [handleChange]
  )

  return <S.ContainerCountdown>{formattedTime}</S.ContainerCountdown>
}

export default forwardRef(Countdown)
