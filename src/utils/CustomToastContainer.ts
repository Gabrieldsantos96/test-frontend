import { ToastContainer } from 'react-toastify'

import styled, { css } from 'styled-components'

export const CustomToastContainer = styled(ToastContainer)`
  ${({ theme }) => css`
    .Toastify__toast,
    .Toastify__toast-body {
      font-size: ${theme.font.normal};
      background: ${theme.colors.white};
    }

    .Toastify__progress-bar {
      background: ${theme.colors.primary};
    }

    .Toastify__progress-bar--info {
      background: ${theme.colors.primary};
    }
    .Toastify__progress-bar--success {
      background: green;
    }
    .Toastify__progress-bar--warning {
      background: yellow};
    }
    .Toastify__progress-bar--error {
      background: red;
    }
  `}
`

export default CustomToastContainer
