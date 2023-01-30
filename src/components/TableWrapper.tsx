import React from 'react'
import { Table } from 'react-bootstrap'

const TableWrapper = () => {
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
        <tr>
          <td>1</td>
          <td>19849281428</td>
          <td>Иванов Иван Иванович</td>
          <td>г.Москва, ул.Ивановская, д.10, кв.45</td>
          <td>+74232497777</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TableWrapper