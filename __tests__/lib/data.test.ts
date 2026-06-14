import { personalInfo, experience, education, certifications, services, vaptProjects, grcProjects } from '../../lib/data'

test('personalInfo has required fields', () => {
  expect(personalInfo.name).toBe('Rizky Aditya')
  expect(personalInfo.nickname).toBe('Kiky')
  expect(personalInfo.whatsappNumber).toBe('6287889867060')
  expect(personalInfo.email).toBe('rizky@nexorasec.asia')
})

test('experience has at least one entry with required fields', () => {
  expect(experience.length).toBeGreaterThan(0)
  expect(experience[0]).toHaveProperty('role')
  expect(experience[0]).toHaveProperty('company')
  expect(experience[0]).toHaveProperty('startYear')
})

test('education has two entries', () => {
  expect(education.length).toBe(2)
})

test('certifications has three entries', () => {
  expect(certifications.length).toBe(3)
})

test('services has two entries', () => {
  expect(services.length).toBe(2)
})
