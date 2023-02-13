import { ArticleProps } from 'components/types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function homeMapper(data: any) {
  const items: ArticleProps[] = []
  Object.values(data).map((values) => items.push(values as ArticleProps))
  return items
}
