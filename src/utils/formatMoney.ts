export function formatMoney(value: number): string {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
}
