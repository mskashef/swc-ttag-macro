import { render, screen } from '@testing-library/react'
import Button from '../components/button'

test('Button renders a without crash', async () => {
    render(<Button>sample text</Button>)
    
    const button = screen.getByRole('button')

    expect(button.textContent).toBe('sample text')
})