import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Header from 'src/components/layout/Header'

test('Demo', () => {
  expect(true).toBe(true)
})

test('render Header component', () => {
  // Arrange
  render(<Header />)

  // Act
  expect(true).toBeTruthy()

  // Assert
})
