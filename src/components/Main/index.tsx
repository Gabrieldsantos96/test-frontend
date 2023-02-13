import Modal from 'components/Modal'
import PostItem from 'components/PostItem'
import InputGroup from 'components/InputGroup'
import * as S from './styles'
import Countdown from 'components/Countdown'

import { useMain } from './useMain'
import { ArticleProps, ItemProps } from 'components/types'

type typeOptions = 'paragraph' | 'title' | 'img' | 'line'

type ElementParams = Omit<ItemProps, 'type'>

type ElementProps = {
  paragraph: (content: ElementParams) => JSX.Element
  title: (content: ElementParams) => JSX.Element
  img: (imgSrc: ElementParams) => JSX.Element
  line: (content: ElementParams) => JSX.Element
}

const Main = (props: ArticleProps) => {
  const {
    inputValues,
    inputsVisibility,
    isBeingChanged,
    isOpen,
    setIsOpen,
    countdownRef,
    dragItemRef,
    dragOverItemRef,
    handleInputChange,
    items,
    onAddItem,
    onDelete,
    onFinish,
    onSort
  } = useMain(props)

  const Elements: ElementProps = {
    paragraph: ({ content }) => <S.Paragraph>{content}</S.Paragraph>,
    title: ({ content }) => <S.Title>{content}</S.Title>,
    img: ({ content }) => <S.ImageBox src={content as string} />,
    line: ({ content }) => <S.Divider>{content}</S.Divider>
  }

  return (
    <>
      <S.Wrapper>
        <S.PostWrapper>
          {items?.map(({ type, ...rest }, index) => (
            <PostItem
              key={index}
              id={index}
              onClickChange={(id) => onDelete(id)}
              onDragStartChange={(id) => (dragItemRef.current = id)}
              onDragEnterChange={(id) => (dragOverItemRef.current = id)}
              handleSort={onSort}
            >
              {Elements[type as typeOptions](rest!)}
            </PostItem>
          ))}
        </S.PostWrapper>

        <InputGroup
          inputValues={inputValues}
          inputsVisibility={inputsVisibility}
          handleInputChange={handleInputChange}
        />

        <S.ButtonWrapper>
          <S.Button onClick={() => setIsOpen(true)} role="button">
            clique aqui para adicionar um novo elemento
          </S.Button>
          <Modal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            handleAddItem={onAddItem}
          />
        </S.ButtonWrapper>
        <Countdown
          durationTimeInSeconds={5}
          startWhen={isBeingChanged}
          ref={countdownRef}
          onFinish={onFinish}
        />
      </S.Wrapper>
    </>
  )
}

export default Main
