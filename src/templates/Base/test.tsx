import { render, screen } from '@testing-library/react'

import Base from '.'

describe('<Base />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Base>
        {' '}
        <h1>children</h1>
      </Base>
    )

    expect(screen.getByRole('heading', { name: /Base/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
