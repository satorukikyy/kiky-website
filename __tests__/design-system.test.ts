// Smoke test: verify tailwind config exports custom colors
import config from '../tailwind.config'

test('tailwind config has green/white editorial custom colors', () => {
  const colors = config.theme?.extend?.colors as Record<string, unknown>
  expect(colors['brand-bg']).toBe('#F7FAF7')
  expect(colors['brand-soft']).toBe('#F0F7F1')
  expect(colors['brand-green']).toBe('#00A845')
  expect(colors['brand-green-dark']).toBe('#007A32')
  expect(colors['brand-green-light']).toBe('#EBF7EE')
  expect(colors['brand-green-border']).toBe('#C3E6CC')
  expect(colors['brand-text']).toBe('#0A0A0A')
  expect(colors['brand-muted']).toBe('#6B7280')
  expect(colors['brand-subtle']).toBe('#9CA3AF')
  expect(colors['brand-border']).toBe('#E4EDE5')
  expect(colors['brand-border-soft']).toBe('#DDE9DE')
})

test('tailwind config does not contain removed neo-brut tokens', () => {
  const colors = config.theme?.extend?.colors as Record<string, unknown>
  expect(colors['brand-red']).toBeUndefined()
  expect(colors['brand-yellow']).toBeUndefined()
  expect(colors['brand-blue']).toBeUndefined()
  expect(colors['brand-purple']).toBeUndefined()
  expect(colors['sky-light']).toBeUndefined()
  expect(colors['sky-mid']).toBeUndefined()
})

test('tailwind config does not contain removed neo box shadows', () => {
  const shadows = config.theme?.extend?.boxShadow as Record<string, string> | undefined
  expect(shadows?.['neo']).toBeUndefined()
  expect(shadows?.['neo-sm']).toBeUndefined()
  expect(shadows?.['neo-lg']).toBeUndefined()
})
