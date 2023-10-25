export const dateFormatter = (created_at: string) => {
  if(!created_at) return created_at
  const date = new Date(created_at)
  const year = date.getFullYear()
  const monthName = date.toLocaleString('default', { month: 'long' })
  const day = date.getDate()
  const dayOfWeek = date.getDay()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
  return `${getDayName(dayOfWeek)}, ${monthName} ${day}, ${year}, ${formattedTime}`
}

export const getDayName = (day: number) => {
  let dayName
  switch (day) {
    case 0:
      dayName = "Sunday"
      break
    case 1:
      dayName = "Monday"
      break
    case 2:
      dayName = "Tuesday"
      break
    case 3:
      dayName = "Wednesday"
      break
    case 4:
      dayName = "Thursday"
      break
    case 5:
      dayName = "Friday"
      break
    case 6:
      dayName = "Saturday"
      break
    default:
      dayName = "Invalid Day"
  }
  return dayName
}
