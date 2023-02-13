import {
  defaultInputsVisibility,
  defaultInputValues
} from 'components/Main/useMain'
import TextField from 'components/TextField'

import * as S from './styles'

const InputGroup = ({
  handleInputChange,
  inputValues,
  inputsVisibility
}: {
  inputsVisibility: typeof defaultInputsVisibility
  inputValues: typeof defaultInputValues
  handleInputChange: (field: string, value: string) => void
}) => {
  return (
    <S.Wrapper>
      {!!inputsVisibility.title && (
        <TextField
          placeholder="Digite um título"
          name="title"
          value={inputValues.title}
          onChange={(e) => handleInputChange('title', e.target.value)}
        />
      )}
      {!!inputsVisibility.paragraph && (
        <TextField
          placeholder="Digite um título"
          name="title"
          value={inputValues.paragraph}
          onChange={(e) => handleInputChange('paragraph', e.target.value)}
        />
      )}
    </S.Wrapper>
  )
}

export default InputGroup
