import React, {
  useCallback,
  useEffect,
  useState
} from 'react'
import { ScheduleStatus } from 'src/@types/scheduleStatus'
import { getAllScheduleStatus } from 'src/services/scheduleStatus'
import { TableScheduleRow } from 'src/pages/Schedules/types'

const ComponentStatusRow: React.FC<TableScheduleRow> = ({
  schedule
}) => {
  const [scheduleStatus, setScheduleStatus] = useState<
    ScheduleStatus[]
  >([])

  useEffect(() => {
    async function fetchScheduleStatus() {
      const responseScheduleStatus = await getAllScheduleStatus()
      setScheduleStatus(responseScheduleStatus)
    }

    fetchScheduleStatus()
  }, [])

  const getScheduleStatus = useCallback(
    (status: number) => {
      return scheduleStatus.find(({ id }) => id === status)
    },
    [scheduleStatus]
  )

  const status = getScheduleStatus(schedule.statusKey)
  return (
    <td>
      <div className="schedules--status">
        <span
          className="icon"
          style={{
            background: status?.color
          }}
        />
        {status?.name}
      </div>
    </td>
  )
}

export default ComponentStatusRow
