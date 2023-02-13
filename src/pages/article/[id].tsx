import ArticleTemplate from 'templates/Article'
import { ArticleProps } from 'components/types'
import { GetServerSidePropsContext } from 'next'
import { baseApi } from 'services/baseAPI'

export default function Home(props: ArticleProps) {
  return <ArticleTemplate {...props} />
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  let data = null
  try {
    const result = await baseApi.getArticleByID(ctx.params!.id as string)
    data = result.data
  } catch {
    //
  }

  return {
    props: { ...data }
  }
}
