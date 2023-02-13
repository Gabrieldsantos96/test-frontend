/* eslint-disable @next/next/no-img-element */
import * as S from './styles'

const Modal = ({
  isOpen,
  onClose,
  handleAddItem
}: {
  isOpen: boolean
  onClose: () => void
  handleAddItem: (type: string, e?: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Content aria-hidden={!isOpen}>
        <S.Box>
          <S.BoxPhrase>Text</S.BoxPhrase>
          <S.BoxContent>
            <S.ImageBox>
              <img src={'/img/text.svg'} />
            </S.ImageBox>
            <S.Item onClick={() => handleAddItem('paragraph')}>
              <S.BoxPhrase weight="bold">Paragráfo</S.BoxPhrase>
              <S.BoxPhrase weight="light">
                Adicione um paragráfo ao texto
              </S.BoxPhrase>
            </S.Item>
          </S.BoxContent>

          <S.BoxContent>
            <S.ImageBox>
              <img src={'/img/text.svg'} />
            </S.ImageBox>
            <S.Item onClick={() => handleAddItem('title')}>
              <S.BoxPhrase weight="bold">Title</S.BoxPhrase>
              <S.BoxPhrase weight="light">Adicione um título</S.BoxPhrase>
            </S.Item>
          </S.BoxContent>
          <S.BoxPhrase>Basic</S.BoxPhrase>

          <S.BoxContent>
            <S.ImageBox>
              <img src={'/img/image.svg'} />
            </S.ImageBox>
            <S.Item role="button">
              <label htmlFor="uploadImg">
                <input
                  type="file"
                  id="uploadImg"
                  accept="image/*"
                  onChange={(e) => handleAddItem('file', e)}
                />
                <S.BoxPhrase weight="bold">Imagem</S.BoxPhrase>
                <S.BoxPhrase weight="light">Envie uma imagem</S.BoxPhrase>
              </label>
            </S.Item>
          </S.BoxContent>
          <S.BoxContent>
            <S.ImageBox>
              <img src={'/img/text.svg'} />
            </S.ImageBox>
            <S.Item onClick={() => handleAddItem('line')}>
              <S.BoxPhrase weight="bold">Separador</S.BoxPhrase>
              <S.BoxPhrase weight="light">Crie uma linha</S.BoxPhrase>
            </S.Item>
          </S.BoxContent>
        </S.Box>
      </S.Content>
      <S.Overlay onClick={onClose} aria-hidden={!isOpen} />
    </S.Wrapper>
  )
}

export default Modal
