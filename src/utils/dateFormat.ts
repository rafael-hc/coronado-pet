export function formateDateForInput(date: Date) {
  const formatter = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    year: 'numeric',
    month: '2-digit',
  })

  const formatted = formatter.format(date)

  const formattedDate = formatted.split('/').reverse().join('-')

  return formattedDate
}
