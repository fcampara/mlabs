import React, { useCallback } from 'react'
import { TableScheduleSocialNetworkRow } from 'src/pages/Schedules/types'

const ComponentSocialNetworkRow: React.FC<TableScheduleSocialNetworkRow> = ({
  schedule,
  socialNetworks
}) => {
  const getIconSocialNetwork = useCallback(
    (id: number) => {
      return socialNetworks?.find(
        socialNetwork => socialNetwork.id === id
      )?.icon
    },
    [socialNetworks]
  )

  return (
    <td align="center">
      <div className="schedules--social-network">
        {schedule.socialNetworkKey.map(key => (
          <i
            key={key}
            className={`schedules--social-network__icon fab fa-${getIconSocialNetwork(
              key
            )}`}
          />
        ))}
      </div>
    </td>
  )
}

export default ComponentSocialNetworkRow
