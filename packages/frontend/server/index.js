const ScheduleStatus = require('./schedules-status.json')
const Schedules = require('./schedules.json')
const SocialNetworks = require('./social-networks.json')

module.exports = () => ({
  'schedules-status': ScheduleStatus,
  schedules: Schedules,
  'social-networks': SocialNetworks
})
