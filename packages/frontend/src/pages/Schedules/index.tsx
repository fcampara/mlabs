import React, {
  useCallback,
  useEffect,
  useState
} from 'react'
import { Schedule } from 'src/@types/schedules'
import { getAllSchedules } from 'src/services/schedule'
import { formatDatePTBRTime } from 'src/utils/formatDate'
import StatusRow from './StatusRow'
import './styles.css'
import ComponentSocialNetworkRow from './SocialNetworkRow'
import TableHeader from './Header'
import PreviewRow from './PreviewRow'
import { SocialNetwork } from 'src/@types/socialNetworks'
import { getAllSocialNetworks } from 'src/services/socialNetworks'

const PageSchedules: React.FC = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([])
  const [orderBy, setOrderBy] = useState<'ASC' | 'DESC'>(
    'ASC'
  )
  const [socialNetworks, setSocialNetworks] = useState<
    SocialNetwork[]
  >([])

  const handleOrderDate = useCallback(
    (schedulesToOrder: Schedule[]) => {
      const OPERATOR_ORDER = {
        ASC: (prevDate: Date, nextDate: Date) =>
          new Date(prevDate).getTime() -
          new Date(nextDate).getTime(),
        DESC: (prevDate: Date, nextDate: Date) =>
          new Date(prevDate).getTime() +
          new Date(nextDate).getTime()
      }
      const schedulesOrderedByDate = schedulesToOrder.sort(
        (prevDate, nextDate) =>
          OPERATOR_ORDER[orderBy](
            prevDate.publicationDate,
            nextDate.publicationDate
          )
      )
      setSchedules(schedulesOrderedByDate)
    },
    [orderBy]
  )

  const handleChangeOrder = useCallback(() => {
    setOrderBy(orderBy === 'ASC' ? 'DESC' : 'ASC')
    handleOrderDate(schedules)
  }, [orderBy, schedules, handleOrderDate])

  useEffect(() => {
    async function fetchSchedules() {
      const storagedSchedules = await getAllSchedules()
      handleOrderDate(storagedSchedules)
    }

    async function fetchSocialNetworks() {
      const responseSocialNetworks = await getAllSocialNetworks()
      setSocialNetworks(responseSocialNetworks)
    }

    fetchSchedules()
    fetchSocialNetworks()
  }, [handleOrderDate])

  return (
    <div className="schedules">
      <div className="schedules--title">
        Listagem de agendamento
      </div>
      <table className="schedules--table">
        <TableHeader
          onChangeOrder={handleChangeOrder}
          orderBy={orderBy}
        />
        <tbody>
          {schedules.map(schedule => (
            <tr key={schedule.id}>
              <ComponentSocialNetworkRow
                schedule={schedule}
                socialNetworks={socialNetworks}
              />
              <td align="center">
                {schedule.media && (
                  <img
                    className="schedule--media"
                    src={schedule.media}
                  />
                )}
              </td>
              <td>
                <div
                  dangerouslySetInnerHTML={{
                    __html: schedule.text
                  }}
                />
              </td>
              <td>
                {formatDatePTBRTime(
                  schedule.publicationDate
                )}
              </td>
              <PreviewRow
                schedule={schedule}
                socialNetworks={socialNetworks}
              />
              <StatusRow schedule={schedule} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PageSchedules
