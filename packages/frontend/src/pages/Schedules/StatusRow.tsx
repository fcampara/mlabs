import React, {
  useCallback,
  useEffect,
  useState
} from 'react'
import { Schedule } from 'src/@types/schedules'
import { ScheduleStatus } from 'src/@types/scheduleStatus'
import { getAllScheduleStatus } from 'src/services/scheduleStatus'

const ComponentStatusRow: React.FC<{
  schedule: Schedule
}> = ({ schedule }) => {
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
