import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: ${theme.layers.overlay};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    margin-top: ${theme.spacings.small};
    position: absolute;
    z-index: ${theme.layers.alwaysOnTop};
  `}
`

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(2rem);
  `
}

type WrapperProps = {
  isOpen?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    width: max-content;
    position: absolute;
    bottom: 38rem;
    ${media.greaterThan('medium')`
    bottom: 36rem;
    `}

    ${Content},${Overlay} {
      transition: opacity 0.2s ease-in, transform ${theme.transition.default};
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()};
    }
  `}
`

export const Box = styled.div`
  ${({ theme }) => css`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    width: 26rem;
    height: 30rem;
    background-color: ${theme.colors.white};
  `}
`

type BoxPhraseProps = {
  weight?: 'bold' | 'light'
  color?: 'gray' | 'black'
  size?: 'small' | 'medium'
}

export const BoxPhrase = styled.p<BoxPhraseProps>`
  ${({ theme, weight = 'light', color = 'black', size = 'medium' }) => css`
    text-align: start;
    font-weight: ${theme.font[weight]};
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes[size]};
  `}
`

export const Item = styled.div`
  ${({ theme }) => css`
    input {
      display: none;
      visibility: none;
    }
    transition: background ${theme.transition.default};
    &:hover {
      background-color: ${theme.colors.lightGray};
    }
  `}
`

export const BoxContent = styled.div`
  display: flex;
`

export const ImageBox = styled.div`
  flex-shrink: 0;
  margin-right: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 3rem;
    height: 3rem;
  }
`
