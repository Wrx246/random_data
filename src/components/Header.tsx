import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { useAppDispatch } from '../hooks/redux';
import { fetchUsers } from '../store/users/users-actions';
import '../styles/Header.css'

const Header = () => {
    const dispatch = useAppDispatch();
    const options = [
        { value: 'en', text: 'USA-en' },
        { value: 'rus', text: 'Russia-rus' },
        { value: 'pol', text: 'Poland-pol' },
    ]
    const [selected, setSelected] = useState(options[0].value);
    const [range, setRange] = useState<number>(0)
    const [seed, setSeed] = useState<number>(0)

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        e.preventDefault();
        setSelected(e.target.value)
        dispatch(fetchUsers(selected))
    }

    const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setRange(parseInt(e.target.value))
    }

    const handleSeed = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSeed(parseInt(e.target.value))
    }

    return (
        <Form className='d-flex justify-content-between align-items-center w-100 flex-row'>
            <Form.Group>
                <Form.Select aria-label="Default select example" className='w-35' onChange={handleSelect}>
                    {options.map(o => (
                        <option key={o.text} value={o.value}>{o.text}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            <Form.Group className='w-50 m-4'>
                <Form.Label className='w-100'>Range
                    <Form.Range
                        value={range}
                        onChange={handleRange}
                        step={1}
                        max={10}
                        min={0} />
                </Form.Label>
                <Form.Control
                    value={range}
                    onChange={handleRange}
                    max={1000}
                    min={0}
                    type="number"
                    placeholder="Enter range" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Seed</Form.Label>
                <Form.Control type="number" value={seed} onChange={handleSeed} placeholder="Enter seed" />
                <Button className='mt-3' variant="primary" type="submit">
                    Random
                </Button>
            </Form.Group>
        </Form>
    )
}

export default Header