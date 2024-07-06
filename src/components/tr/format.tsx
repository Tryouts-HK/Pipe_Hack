export const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ')

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(amount)
}

export const formatPercent = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    maximumFractionDigits: 2
  }).format(amount)
}

export const formatNumber = (amount: number) => {
  return new Intl.NumberFormat('en-US').format(amount)
}

export const formatDateTime = (date: string) => {
  return new Intl.DateTimeFormat('en-US').format(new Date(date))
}

export const formatTime = (date: string) => {
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric'
  }).format(new Date(date))
}

export const formatDay = (date: string) => {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long'
  }).format(new Date(date))
}

export const formatMonth = (date: string) => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long'
  }).format(new Date(date))
}

export const formatYear = (date: string) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric'
  }).format(new Date(date))
}

export const formatDuration = (duration: number) => {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60
  return `${hours}h ${minutes}m`
}

export const formatDurationShort = (duration: number) => {
  const hours = Math.floor(duration / 60)
  // const minutes = duration % 60
  return `${hours}h`
}

export const formatDurationLong = (duration: number) => {
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60
  return `${hours} hours and ${minutes} minutes`
}

export const formatDurationMinutes = (duration: number) => {
  return `${duration} minutes`
}

export const formatDurationSeconds = (duration: number) => {
  return `${duration} seconds`
}

export const formatDurationMilliseconds = (duration: number) => {
  return `${duration} milliseconds`
}

export const formatDurationMicroseconds = (duration: number) => {
  return `${duration} microseconds`
}

export const formatDurationNanoseconds = (duration: number) => {
  return `${duration} nanoseconds`
}

export const formatDurationPicoseconds = (duration: number) => {
  return `${duration} picoseconds`
}

export const formatDurationFemtoseconds = (duration: number) => {
  return `${duration} femtoseconds`
}

export const formatDurationAttoseconds = (duration: number) => {
  return `${duration} attoseconds`
}

export const formatDurationZeptoseconds = (duration: number) => {
  return `${duration} zeptoseconds`
}

export const formatDurationYoctoseconds = (duration: number) => {
  return `${duration} yoctoseconds`
}

export const formatDurationPlanckTime = (duration: number) => {
  return `${duration} Planck times`
}

export const formatDurationShakes = (duration: number) => {
  return `${duration} shakes`
}

export const formatDurationJiffies = (duration: number) => {
  return `${duration} jiffies`
}

export const formatDurationMicrofortnights = (duration: number) => {
  return `${duration} microfortnights`
}