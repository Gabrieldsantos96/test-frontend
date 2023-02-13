import { BsFillTrashFill } from 'react-icons/bs'
import * as S from './styles'

const PostItem = ({
  id,
  children,
  onDragStartChange,
  onDragEnterChange,
  onClickChange,
  handleSort
}: {
  children: React.ReactNode
  id: number
  onClickChange: (index: number) => void
  onDragStartChange: (index: number) => void
  onDragEnterChange: (index: number) => void
  handleSort: () => void
}) => {
  return (
    <S.Wrapper
      onClick={() => onClickChange(id)}
      draggable
      onDragStart={() => onDragStartChange(id)}
      onDragEnter={() => onDragEnterChange(id)}
      onDragEnd={handleSort}
      onDragOver={(e) => e.preventDefault()}
    >
      <S.TrashIconWrapper>
        <BsFillTrashFill
          onClick={() => onClickChange(id)}
          role="button"
          size={20}
        />
      </S.TrashIconWrapper>

      {children}
    </S.Wrapper>
  )
}

export default PostItem
