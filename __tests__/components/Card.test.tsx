import { render, screen } from '@testing-library/react'
import Card from '../../components/ui/Card'

test('renders card with children', () => {
  render(<Card><p>Card content</p></Card>)
  expect(screen.getByText('Card content')).toBeInTheDocument()
})

test('renders yellow card variant', () => {
  render(<Card variant="yellow"><p>Yellow</p></Card>)
  const wrapper = screen.getByText('Yellow').parentElement
  expect(wrapper?.className).toContain('bg-brand-yellow')
})
