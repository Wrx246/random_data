import { Container, Form } from 'react-bootstrap'

const Header = () => {
    
    return (
        <Container className='d-flex'>
            <Form.Select aria-label="Default select example" className='w-25'>
                <option value="1">USA-en</option>
                <option value="2">Russia-rus</option>
                <option value="3">Poland-pol</option>
            </Form.Select>
            <Container className='d-flex flex-column'>
                <Form.Label>Range</Form.Label>
                <Form.Range  />
            </Container>
        </Container>
    )
}

export default Header