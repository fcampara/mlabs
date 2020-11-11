export const FORMAT = 'DD/MM'
export const WEEKDAYS_SHORT = [
  'Dom',
  'Seg',
  'Ter',
  'Qua',
  'Qui',
  'Sex',
  'Sab'
]
export const WEEKDAYS_LONG = [
  'Domingo',
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado'
]
export const MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

export const formatDatePTBR = (
  date: Date,
  month?: 'long' | '2-digit'
) => {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: month || '2-digit'
  }).format(date)
}
