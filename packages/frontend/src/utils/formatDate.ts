export const formatDatePTBRTime = (date: Date | string) => {
  const instaceDate = new Date(date)
  const intlDate = Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    minute: '2-digit',
    hour: '2-digit'
  }).formatToParts(instaceDate)

  const dateArray = intlDate.map(({ type, value }) => {
    if (type === 'literal' && value === ' ') return ' às '
    return value
  })

  return dateArray.join('')
}
