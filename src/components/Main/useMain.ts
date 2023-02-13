import { ICountdown } from 'components/Countdown'
import { MutableRefObject, RefObject, useRef, useState } from 'react'
import { showToast } from 'utils/showToast'
import { v4 as uuidv4 } from 'uuid'
import { ArticleProps, ItemProps } from 'components/types'
import { baseApi } from 'services/baseAPI'

export const defaultInputValues = {
  title: '',
  paragraph: ''
}

export const defaultInputsVisibility = {
  title: false,
  paragraph: false
}

type useMain = {
  inputValues: typeof defaultInputValues
  inputsVisibility: typeof defaultInputsVisibility
  isBeingChanged: number
  dragOverItemRef: RefObject<number | null>
  dragItemRef: RefObject<number | null>
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  items: ItemProps[]
  countdownRef: MutableRefObject<ICountdown>
  handleInputChange: (name: string, value: string | boolean) => void
  onAddItem: (type: string, event?: React.ChangeEvent<HTMLInputElement>) => void
  onSort: () => void
  onDelete: (index: number) => void
  onFinish: () => void
}

export function useMain(props: ArticleProps) {
  const [inputValues, setInputValues] =
    useState<typeof defaultInputValues>(defaultInputValues)
  const [inputsVisibility, setInputsVisibility] = useState<
    typeof defaultInputsVisibility
  >(defaultInputsVisibility)

  const [items, setItems] = useState<ItemProps[]>(props.items ?? [])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isBeingChanged, setIsBeingChanged] = useState<number>(0)

  const dragItemRef = useRef<number | null>(null)
  const dragOverItemRef = useRef<number | null>(null)
  const countdownRef = useRef<ICountdown>(null)

  const onSort = () => {
    setIsBeingChanged(Math.random())

    const arrCopy = [...items]
    const itemBeingDragged = arrCopy.splice(dragItemRef.current!, 1)[0]
    arrCopy.splice(dragOverItemRef.current!, 0, itemBeingDragged)

    setItems(arrCopy)

    dragItemRef.current = null
    dragOverItemRef.current = null
  }

  const handleInputChange = (name: string, value: string | boolean) => {
    setIsBeingChanged(Math.random())
    setInputValues((s) => ({ ...s, [name]: value }))
  }

  const onAddItem = (
    type: string,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => {
    switch (type) {
      case 'paragraph':
        {
          setIsOpen(false)
          setInputsVisibility((prevState) => ({
            ...prevState,
            paragraph: true
          }))
        }
        break
      case 'title':
        {
          setIsOpen(false)
          setInputsVisibility((prevState) => ({
            ...prevState,
            title: true
          }))
        }
        break

      case 'line':
        {
          setIsBeingChanged(Math.random())
          setIsOpen(false)
          setItems((prevState) => [
            ...prevState,
            { id: uuidv4(), type: 'line' }
          ])
        }
        break

      default: {
        if (event!.target.files && !!event!.target.files.length) {
          const reader = new FileReader()
          reader.readAsDataURL(event!.target.files[0])
          reader.addEventListener('load', () => {
            setIsOpen(false)
            setIsBeingChanged(Math.random())

            setItems((prevState) => [
              ...prevState,
              {
                id: uuidv4(),
                type: 'img',
                content: reader.result as string
              }
            ])
          })
        }
      }
    }
  }

  const onDelete = (id: number) => {
    setIsBeingChanged(Math.random())
    setItems((prevState) => prevState.filter((_, i) => i !== id))
  }

  const onFinish = async () => {
    showToast('As informações foram salvas', 'success')
    countdownRef.current?.handleChange(5)
    const data = [...items]
    const { paragraph, title } = inputValues
    if (paragraph) {
      data.push({ id: uuidv4(), type: 'paragraph', content: paragraph })
    }
    if (title) {
      data.push({ id: uuidv4(), type: 'title', content: title })
    }

    setItems(data)

    try {
      await baseApi.putArticleByID(props.id, items)
    } catch {
      showToast('Não possível salvar as alterações', 'error')
    }

    setInputsVisibility(defaultInputsVisibility)
    setInputValues(defaultInputValues)
  }

  return {
    dragOverItemRef,
    dragItemRef,
    inputValues,
    inputsVisibility,
    isBeingChanged,
    isOpen,
    setIsOpen,
    items,
    countdownRef,
    handleInputChange,
    onAddItem,
    onSort,
    onDelete,
    onFinish
  }
}
