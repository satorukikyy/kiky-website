// Smoke test: verify tailwind config exports custom colors
import config from '../tailwind.config'

test('tailwind config has purple/white minimalist custom colors', () => {
  const colors = config.theme?.extend?.colors as Record<string, unknown>
  expect(colors['c-bg']).toBe('#FFFFFF')
  expect(colors['c-text']).toBe('#111111')
  expect(colors['c-muted']).toBe('#6B7280')
  expect(colors['c-subtle']).toBe('#9CA3AF')
  expect(colors['c-border']).toBe('#E5E7EB')
  expect(colors['c-purple']).toBe('#7C3AED')
  expect(colors['c-purple-hover']).toBe('#8B5CF6')
  expect(colors['c-purple-light']).toBe('#EDE9FE')
})

test('tailwind config does not contain removed brand-green tokens', () => {
  const colors = config.theme?.extend?.colors as Record<string, unknown>
  expect(colors['brand-green']).toBeUndefined()
  expect(colors['brand-bg']).toBeUndefined()
  expect(colors['brand-text']).toBeUndefined()
  expect(colors['brand-muted']).toBeUndefined()
  expect(colors['brand-border']).toBeUndefined()
})

test('tailwind config does not contain removed neo-brut tokens', () => {
  const colors = config.theme?.extend?.colors as Record<string, unknown>
  expect(colors['brand-red']).toBeUndefined()
  expect(colors['brand-yellow']).toBeUndefined()
  expect(colors['brand-blue']).toBeUndefined()
  expect(colors['sky-light']).toBeUndefined()
  expect(colors['sky-mid']).toBeUndefined()
})

test('tailwind config does not contain removed neo box shadows', () => {
  const shadows = config.theme?.extend?.boxShadow as Record<string, string> | undefined
  expect(shadows?.['neo']).toBeUndefined()
  expect(shadows?.['neo-sm']).toBeUndefined()
  expect(shadows?.['neo-lg']).toBeUndefined()
})
