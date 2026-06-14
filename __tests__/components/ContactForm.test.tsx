import { render, screen } from '@testing-library/react'
import ContactForm from '../../components/contact/ContactForm'

const WHATSAPP_NUMBER = '6287889867060'

test('renders all form fields', () => {
  render(<ContactForm whatsappNumber={WHATSAPP_NUMBER} />)
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
  expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
})

test('submit button is present', () => {
  render(<ContactForm whatsappNumber={WHATSAPP_NUMBER} />)
  expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
})
