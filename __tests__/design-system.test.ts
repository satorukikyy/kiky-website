// Smoke test: verify tailwind config exports custom colors
import config from '../tailwind.config'

test('tailwind config has neo-brut custom colors', () => {
  const colors = config.theme?.extend?.colors as Record<string, unknown>
  expect(colors['brand-red']).toBe('#E63946')
  expect(colors['brand-yellow']).toBe('#FFD166')
  expect(colors['brand-blue']).toBe('#118AB2')
  expect(colors['brand-green']).toBe('#06D6A0')
  expect(colors['brand-purple']).toBe('#7B2D8B')
})

test('tailwind config has neo-brut box shadows', () => {
  const shadows = config.theme?.extend?.boxShadow as Record<string, string>
  expect(shadows['neo']).toBe('4px 4px 0px #0A0A0A')
  expect(shadows['neo-sm']).toBe('2px 2px 0px #0A0A0A')
})
