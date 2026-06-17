import { render, screen } from '@testing-library/react'
import Card from '../../components/ui/Card'

test('renders card with children', () => {
  render(<Card><p>Card content</p></Card>)
  expect(screen.getByText('Card content')).toBeInTheDocument()
})

test('renders purple card variant', () => {
  render(<Card variant="purple"><p>Purple</p></Card>)
  const wrapper = screen.getByText('Purple').parentElement
  expect(wrapper?.className).toContain('bg-c-purple')
})
