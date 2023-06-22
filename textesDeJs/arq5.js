const cidades = new Array(
    'São Paulo',
    'Cotia',
    'Itapevi',
    'Carapicuiba',
)

cidades.push('Osasco', 'Vargem Grande')

cidades.splice(2,1)

console.log(typeof(cidades))
console.table(cidades)
console.table(cidades[1])