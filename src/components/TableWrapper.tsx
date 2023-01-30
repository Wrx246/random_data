import React from 'react'
import { Table } from 'react-bootstrap'
import { useAppSelector } from '../hooks/redux'

const TableWrapper = () => {
  const { users } = useAppSelector(state => state.usersSlice)
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
      </tbody>
    </Table>
  )
}

export default TableWrapper