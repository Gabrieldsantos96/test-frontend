import Base from 'templates/Base'
import Hero from 'components/Hero'
import { ArticleProps } from 'components/types'

const Home = (props: ArticleProps[]) => {
  return (
    <Base>
      <Hero {...props} />
    </Base>
  )
}

export default Home
