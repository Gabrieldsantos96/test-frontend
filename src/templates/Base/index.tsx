import { Container } from 'components/Container'
import React from 'react'
import * as S from './styles'

const Base = ({ children }: { children: React.ReactNode }) => (
  <S.Wrapper>
    <Container>
      <S.Content>{children}</S.Content>
    </Container>
  </S.Wrapper>
)

export default Base
