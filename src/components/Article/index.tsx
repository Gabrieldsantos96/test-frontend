/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'

import * as S from './styles'

const Article = ({ id, index }: { id: string; index: number }) => {
  return (
    <S.Wrapper>
      <Link href={`article/${id}`} passHref>
        <S.ImageBox>
          <img src={'img/imagem-artigo.png'} alt="imagem-artigo" />
        </S.ImageBox>
      </Link>
      <S.Content>
        <S.Title>{`Post ${index}`}</S.Title>
        <S.Description>Clique para editar</S.Description>
      </S.Content>
    </S.Wrapper>
  )
}

export default Article
