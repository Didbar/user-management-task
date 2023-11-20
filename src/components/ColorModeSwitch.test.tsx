import { render, screen } from '@testing-library/react'
import ColorModeSwitch from './ColorModeSwitch'

test('renders ColorModeSwitch component', () => {
  render(<ColorModeSwitch />)

  const switchElement = screen.getByRole('checkbox')
  expect(switchElement).toBeInTheDocument()

  const textElement = screen.getByText('Change Mode')
  expect(textElement).toBeInTheDocument()
})
