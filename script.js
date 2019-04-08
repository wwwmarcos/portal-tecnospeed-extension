
const arrayParse = elements => Array.from(elements)

const isValid = hours => hours.length > 3

const getLinesToValidation = tableLines => tableLines.filter(tableLine => {
  const tds = tableLine.getElementsByTagName('td')

  const invalidTexts = ['Repouso', 'Compensado', 'Abonado Empresa', 'Feriado']
  const invalidTds = arrayParse(tds).filter(td => invalidTexts.includes(td.innerText))

  return !invalidTds.length
})

const start = () => {
  const tableLinesDom = document.querySelectorAll('#diasDoEspelho tbody tr')
  const tableLines = Array.from(tableLinesDom)

  const validLines = getLinesToValidation(tableLines)

  validLines.forEach(line => {
    const tds = arrayParse(line.getElementsByTagName('td'))
    const hoursTdText = tds[3]
    const hours = hoursTdText.innerText.split(' ')

    if (!isValid(hours)) {
      hoursTdText.style.color = 'red'
    }
  })
}

setInterval(start, 3300)
