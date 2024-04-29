/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con 
la clase.pokemon

1.5 Usa querySelector para mostrar por consola todos los elementos con 
el atributo data-function="testMe".

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".*/
const valueToSearch = (valueToSearch) => {
  const result = document.querySelector(valueToSearch)
  console.log(result)
}
const valueToSearchAll = (valueToSearch) => {
  const result = document.querySelectorAll(valueToSearch)
  console.log(result)
}

//EJERCICIO 1.1
valueToSearch('button.showme')
//EJERCICIO 1.2
valueToSearch('h1#pillado')

//EJERCICIO 1.3
valueToSearchAll('p')
//EJERCICIO 1.4
valueToSearchAll('.pokemon')
//EJERCICIO 1.5
valueToSearchAll("[data-function='testMe']")

//EJERCICIO 1.6
const getPerson = () => {
  const array = document.querySelectorAll("[data-function='testMe']")
  for (let index = 0; index < array.length; index++) {
    const element = array[index]
    if (index === 2) {
      console.log(element)
    }
  }
}
getPerson()
