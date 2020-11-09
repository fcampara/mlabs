const isZeroTime = (time: string) => {
  return time.charAt(0) !== '0' || time === '00'
}

const isTimeInRage = (time: number, max: number) => {
  return isNaN(time) || time <= 0 || time > max
}

const isGranThanMaxAndHasOneDecimal = (
  time: number,
  max: number
) => {
  return (
    time > parseInt(max.toString().charAt(0)) &&
    time.toString().length === 1
  )
}

const formatValue = (time: string, max: number): string => {
  if (!isZeroTime(time)) return time
  const parsedTime = parseInt(time)
  if (isTimeInRage(parsedTime, max)) {
    return time.substring(0, 1)
  }
  return isGranThanMaxAndHasOneDecimal(parsedTime, max)
    ? `0${parsedTime}`
    : parsedTime.toString()
}

export const formatTime = (time: string) => {
  let input = time

  if (/\D:$/.test(input)) {
    input = input.substr(0, input.length - 3)
  }

  const values = input.split(':')
  const timeValues = values
    .slice(0, 2)
    .map(timeValue => timeValue.replace(/\D/g, ''))

  if (timeValues[0]) {
    timeValues[0] = formatValue(timeValues[0], 23)
  }
  if (timeValues[1]) {
    timeValues[1] = formatValue(timeValues[1], 59)
  }

  const output = timeValues.map((hourMinute, index) => {
    return hourMinute.length === 2 && index < 1
      ? hourMinute + ' : '
      : hourMinute
  })

  const formattedTime = output.join('').slice(0, 7)

  return formattedTime
}
