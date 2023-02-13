import { ArticleProps } from 'components/types'

export function homeMapper(data: any) {
  const items: ArticleProps[] = []
  Object.values(data).map((values) => items.push(values as ArticleProps))
  return items
}
