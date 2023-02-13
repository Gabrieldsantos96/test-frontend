import { darken } from 'polished'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    cursor: move;
    position: relative;
    transition: ${theme.transition.default};
    &:hover {
      background-color: ${darken(0.1, theme.colors.lightGray)};

      ${TrashIconWrapper}> svg {
        opacity: 1;
        visibility: visible;
        pointer-events: all;
      }
    }
  `}
`

export const TrashIconWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;

  > svg {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
  }
`
