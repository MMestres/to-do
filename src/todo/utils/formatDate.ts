export function formatDate (date: Date | undefined) {
  if (date == null) return ''
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
}

export function formatTime (date: Date | undefined) {
  if (date == null) return ''
  return date.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

export function formatDateInitialDayOfWeek (date: Date) {
  return date.toLocaleDateString('es-ES', { weekday: 'narrow' })
}

export function formatDateDayOfMonth (date: Date) {
  return date.toLocaleDateString('es-ES', { day: 'numeric' })
}

export function formatDateLong (date: Date) {
  return date.toLocaleDateString('es-ES', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function formatTimeLong (date: Date) {
  return date.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
}
