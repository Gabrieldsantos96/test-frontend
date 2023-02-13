import styled, { css } from 'styled-components'
import { Wrapper as InputStyles } from 'components/TextField/styles'
import { Wrapper as PostItemStyles } from 'components/PostItem/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: #fff;
    width: 100%;
    height: 100%;
    min-height: 560px;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.xsmall};
    justify-content: center;

    ${InputStyles} {
      width: 100%;
      margin: ${theme.spacings.xlarge} 0;
    }
  `}
`

export const PostWrapper = styled.div`
  ${({ theme }) => css`
    ${PostItemStyles} {
      margin-top: ${theme.spacings.small};
    }
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.xxlarge};
  `}
`

export const Paragraph = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.light};
    font-size: ${theme.font.sizes.large};
  `}
`

export const ImageBox = styled.img`
  margin-top: 3rem;
  width: 100%;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );

  animation: placeholderShimmer 1s linear infinite forwards;
  object-fit: cover;

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`

export const Item = styled.div`
  cursor: move;
`

export const Divider = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 10rem;
    margin: 4rem 0;

    ::after {
      content: '';
      position: absolute;
      border: 1px solid ${theme.colors.darkGray};
      top: 50%;
      right: 0;
      left: 0;
    }
  `}
`

export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xlarge};
    margin-right: auto;
    position: relative;
  `}
`

export const Button = styled.p`
  ${({ theme }) => css`
    cursor: pointer;
    margin-right: auto;
    color: ${theme.colors.gray};
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.medium};
  `}
`
