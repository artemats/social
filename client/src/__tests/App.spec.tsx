import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import App from 'src/App'

test('Demo', () => {
  expect(true).toBe(true)
})

test('Render the Header page', () => {
  render(<App />)
  expect(true).toBeTruthy()
})
