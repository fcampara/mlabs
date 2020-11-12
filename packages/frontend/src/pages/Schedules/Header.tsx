import React from 'react'
import { TableScheduleHeader } from 'src/pages/Schedules/types'

const ComponentScheduleHeader: React.FC<TableScheduleHeader> = ({
  onChangeOrder,
  orderBy
}) => {
  return (
    <thead className="schedules--table__header">
      <tr>
        <th>Redes Sociais</th>
        <th>Mídia</th>
        <th>Texto</th>
        <th
          className="schedules__order"
          onClick={onChangeOrder}
        >
          Data{' '}
          <i className={`fas fa-arrow-down ${orderBy}`}></i>
        </th>
        <th>Ações</th>
        <th>Status</th>
      </tr>
    </thead>
  )
}

export default ComponentScheduleHeader
