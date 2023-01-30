import { useState } from 'react';
import { Container, Form } from 'react-bootstrap'

const Header = () => {
    const options = [
        {value: 'en', text: 'USA-en'},
        {value: 'rus', text: 'Russia-rus'},
        {value: 'pol', text: 'Poland-pol'},
    ]
    const [selected, setSelected] = useState(options[0].value);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setSelected(e.target.value)
    }
    
    return (
        <Container className='d-flex'>
            <Form.Select aria-label="Default select example" className='w-25' onChange={handleChange}>
                {options.map(o => (
                    <option key={o.text} value={o.value}>{o.text}</option>
                ))}
            </Form.Select>
            <Container className='d-flex flex-column'>
                <Form.Label>Range</Form.Label>
                <Form.Range  />
            </Container>
        </Container>
    )
}

export default Header