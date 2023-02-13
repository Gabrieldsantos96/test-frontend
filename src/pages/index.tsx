import { ArticleProps } from 'components/types'
import { baseApi } from 'services/baseAPI'
import HomeTemplate from 'templates/Home'

export default function Home(props: ArticleProps[]) {
  return <HomeTemplate {...props} />
}

export const getServerSideProps = async () => {
  let data = null
  try {
    const result = await baseApi.getArticles()
    data = result.data
  } catch {
    //
  }

  return {
    props: { ...data }
  }
}
