import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
jest.mock('ttag.macro', () => ({
    t: a => a
}))

test('Home renders a heading', async () => {
    render(<Home />)
    
    const button = screen.getByRole('button')

    expect(button.textContent).toBe('اینجا کلیک کنید')
})