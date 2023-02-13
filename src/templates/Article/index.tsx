import Base from 'templates/Base'
import Main from 'components/Main'
import { ArticleProps } from 'components/types'

const Article = (props: ArticleProps) => (
  <Base>
    <Main {...props} />
  </Base>
)

export default Article
