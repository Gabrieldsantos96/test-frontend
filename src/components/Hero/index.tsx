import { ArticleProps } from 'components/types'
import Article from 'components/Article'
import * as S from './styles'
import { homeMapper } from 'utils/helper'

const Hero = (props: ArticleProps[]) => {
  const data = homeMapper(props)
  return (
    <S.Grid>
      {data.map(({ id }, index) => (
        <Article key={id} index={index + 1} id={id} />
      ))}
    </S.Grid>
  )
}

export default Hero
