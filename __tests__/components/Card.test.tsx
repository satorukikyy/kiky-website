import { render, screen } from '@testing-library/react'
import Card from '../../components/ui/Card'

test('renders card with children', () => {
  render(<Card><p>Card content</p></Card>)
  expect(screen.getByText('Card content')).toBeInTheDocument()
})

test('renders green card variant', () => {
  render(<Card variant="green"><p>Green</p></Card>)
  const wrapper = screen.getByText('Green').parentElement
  expect(wrapper?.className).toContain('bg-brand-green')
})
