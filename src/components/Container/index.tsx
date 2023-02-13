import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 130rem;
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`
