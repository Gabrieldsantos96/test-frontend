import { toast } from 'react-toastify'

type ToastTypes = 'success' | 'warning' | 'error' | 'info'

export const showToast = (message: string, type?: ToastTypes): void => {
  if (!type) {
    toast(message)
    return
  }

  toast[type](`${message}`)
}
