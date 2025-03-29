import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

describe('Page', () => {
    test('renders a image', () => {
        render(<Page />)

        const image = screen.getByRole('img', { name: /Next\.js logo/i })

        expect(image).toBeInTheDocument()
    })
})
