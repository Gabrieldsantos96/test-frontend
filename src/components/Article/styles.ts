import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.article`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${darken(0.1, theme.colors.lightGray)};
    border-radius: ${theme.border.radius};
    transition: background ${theme.transition.fast};

    &:hover {
      color: ${theme.colors.black};
      background-color: ${darken(0.3, theme.colors.lightGray)};
      ${Description} {
        color: ${theme.colors.darkGray};
      }
    }
  `}
`

export const ImageBox = styled.a`
  height: 14rem;
  width: 100%;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 8rem;
    margin: ${theme.spacings.xsmall};
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`

export const Description = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
  `}
`
