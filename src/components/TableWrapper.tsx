import { useState, useRef, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useAppSelector } from '../hooks/redux'
import { useObserver } from '../hooks/useObesrver'

const TableWrapper = () => {
  const { users } = useAppSelector(state => state.usersSlice)
  const [] = useState()
  const ref = useRef<HTMLDivElement>(null);


  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Number</th>
          <th>Id</th>
          <th>Full name</th>
          <th>Address</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        {users?.map(u => (
          <tr key={u.id}>
            <td>{u.number}</td>
            <td>{u.id}</td>
            <td>{u.fullName}</td>
            <td>{u.address}</td>
            <td>{u.phone}</td>
          </tr>
        ))}
        <div ref={ref} style={{ height: '20px' }}></div>
      </tbody>
    </Table>
  )
}

export default TableWrapper