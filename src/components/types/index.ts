export type ArticleProps = {
  id: string
  items: ItemProps[]
}

export type ItemProps = {
  id?: string
  type: string
  content?: string
}
