import { render, screen } from '@testing-library/react'
import Button from '../../components/ui/Button'

test('renders primary button with correct text', () => {
  render(<Button variant="primary">Click Me</Button>)
  expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument()
})

test('renders secondary button', () => {
  render(<Button variant="secondary">Learn More</Button>)
  const btn = screen.getByRole('button', { name: 'Learn More' })
  expect(btn).toBeInTheDocument()
})

test('renders as anchor when href is provided', () => {
  render(<Button variant="primary" href="/about">About</Button>)
  expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
})
