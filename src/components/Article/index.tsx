/* eslint-disable @next/next/no-img-element */
import * as S from './styles'

const Article = ({ id, index }: { id: string; index: number }) => {
  return (
    <S.Wrapper>
      <S.ImageBox href={`article/${id}`} role="link">
        <img src={'img/imagem-artigo.png'} alt="imagem-artigo" />
      </S.ImageBox>

      <S.Content>
        <S.Title>{`Post ${index}`}</S.Title>
        <S.Description>Clique para editar</S.Description>
      </S.Content>
    </S.Wrapper>
  )
}

export default Article
