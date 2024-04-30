/* 1.1 Basandote en el array siguiente, crea una lista ul > li
dinámicamente en el html que imprima cada uno de los paises. */
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
const divCountries = document.createElement('div')
document.body.appendChild(divCountries)
const ulCountries = document.createElement('ul')
ulCountries.setAttribute('style', 'background-color:red;')
divCountries.appendChild(ulCountries)
divCountries.setAttribute('id', 'section-countries')
for (let index = 0; index < countries.length; index++) {
  const element = countries[index]
  const liCountries = document.createElement('li')
  liCountries.textContent = element
  ulCountries.appendChild(liCountries)
}
/* 
1.2 Elimina el elemento que tenga la clase .fn-remove-me. */
const removeMe = document.querySelector('.fn-remove-me')
removeMe.remove()

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
en el div de html con el atributo data-function="printHere". */
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const divCar = document.createElement('div')
const ulCars = document.createElement('ul')
document.body.appendChild(divCar)
divCar.setAttribute('id', 'section-cars')
divCar.setAttribute('data-function', 'printHere')
divCar.appendChild(ulCars)
ulCars.setAttribute('style', 'background-color:blue;')
for (let index = 0; index < cars.length; index++) {
  const element = cars[index]
  const liCars = document.createElement('li')
  liCars.textContent = element
  ulCars.appendChild(liCars)
}

/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
h4 para el titulo y otro elemento img para la imagen. */

const countrieS = [
  {
    title: 'Random title 1',
    imgUrl: 'https://picsum.photos/300/200?random=1'
  },
  {
    title: 'Random title 2',
    imgUrl: 'https://picsum.photos/300/200?random=2'
  },
  {
    title: 'Random title 3',
    imgUrl: 'https://picsum.photos/300/200?random=3'
  },
  {
    title: 'Random title 4',
    imgUrl: 'https://picsum.photos/300/200?random=4'
  },
  {
    title: 'Random title 5',
    imgUrl: 'https://picsum.photos/300/200?random=5'
  }
]
const divGeneral = document.createElement('div')
document.body.appendChild(divGeneral)
divGeneral.setAttribute('id', 'generalDivs')
for (let index = 0; index < countrieS.length; index++) {
  const element = countrieS[index]
  const divCountrieS = document.createElement('div')
  const hCountrieS = document.createElement('h4')
  const imgCountrieS = document.createElement('img')
  hCountrieS.textContent = element.title
  imgCountrieS.setAttribute('src', element.imgUrl)
  divGeneral.appendChild(divCountrieS)
  divCountrieS.setAttribute('style', 'padding:20px; display:inline-block;')
  divCountrieS.setAttribute('id', 'countries-delete')
  hCountrieS.setAttribute(
    'style',
    'text-align:center; text-transform:uppercase;'
  )
  imgCountrieS.setAttribute('style', 'width:150px; height:150px;')
  divCountrieS.appendChild(hCountrieS)
  divCountrieS.appendChild(imgCountrieS)
}

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
elemento de la serie de divs.*/
const countrieS2 = [
  {
    title: 'Random title 1',
    imgUrl: 'https://picsum.photos/300/200?random=1'
  },
  {
    title: 'Random title 2',
    imgUrl: 'https://picsum.photos/300/200?random=2'
  },
  {
    title: 'Random title 3',
    imgUrl: 'https://picsum.photos/300/200?random=3'
  },
  {
    title: 'Random title 4',
    imgUrl: 'https://picsum.photos/300/200?random=4'
  },
  {
    title: 'Random title 5',
    imgUrl: 'https://picsum.photos/300/200?random=5'
  }
]
const rec = () => {
  const divGeneral2 = document.createElement('div')
  const title = document.createElement('h4')
  title.textContent = 'Eliminando el último item'
  document.body.appendChild(divGeneral2)
  divGeneral2.appendChild(title)
  title.setAttribute('style', 'text-align:center; margin-top:60px;')
  divGeneral2.setAttribute('id', 'generalDivs2')
  for (let index = 0; index < countrieS2.length; index++) {
    const element = countrieS2[index]
    const divCountrieS2 = document.createElement('div')
    const hCountrieS2 = document.createElement('h4')
    const imgCountrieS2 = document.createElement('img')
    hCountrieS2.textContent = element.title
    imgCountrieS2.setAttribute('src', element.imgUrl)
    divGeneral2.appendChild(divCountrieS2)
    divCountrieS2.setAttribute('style', 'padding:20px; display:inline-block;')
    divCountrieS2.setAttribute('id', 'countries-delete')
    hCountrieS2.setAttribute(
      'style',
      'text-align:center; text-transform:uppercase;'
    )
    imgCountrieS2.setAttribute('style', 'width:150px; height:150px;')
    divCountrieS2.appendChild(hCountrieS2)
    divCountrieS2.appendChild(imgCountrieS2)
  }
}
rec()
const divDeletes = document.querySelector('#generalDivs2')
const divDelete = document.createElement('div')
divDeletes.appendChild(divDelete)
divDelete.setAttribute('id', 'btn_delete')
const buttonDel = document.createElement('button')
buttonDel.textContent = 'Delete Last Item'
divDelete.appendChild(buttonDel)
buttonDel.addEventListener('click', () => {
  const divChildren = divDeletes.querySelectorAll('#countries-delete')
  const x = divChildren[divChildren.length - 1]
  divDeletes.removeChild(x)
  if (divChildren.length <= 1) {
    buttonDel.remove()
  }
})

/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
divs que elimine ese mismo elemento del html. */
const countrieS3 = [
  {
    title: 'Random title 1',
    imgUrl: 'https://picsum.photos/300/200?random=1'
  },
  {
    title: 'Random title 2',
    imgUrl: 'https://picsum.photos/300/200?random=2'
  },
  {
    title: 'Random title 3',
    imgUrl: 'https://picsum.photos/300/200?random=3'
  },
  {
    title: 'Random title 4',
    imgUrl: 'https://picsum.photos/300/200?random=4'
  },
  {
    title: 'Random title 5',
    imgUrl: 'https://picsum.photos/300/200?random=5'
  }
]
const divCountries3 = document.createElement('div')
document.body.appendChild(divCountries3)
divCountries3.setAttribute('id', 'generalDivs3')
const title = document.createElement('h4')
title.textContent = 'Eliminando items'
divCountries3.appendChild(title)
title.setAttribute('style', 'text-align:center; margin-top:60px;')
for (let index = 0; index < countrieS3.length; index++) {
  const element = countrieS3[index]
  const divCountrieS3 = document.createElement('div')
  const hCountrieS3 = document.createElement('h4')
  const imgCountrieS3 = document.createElement('img')
  const buttonDel = document.createElement('button')
  buttonDel.textContent = 'Delete Last Item'
  hCountrieS3.textContent = element.title
  imgCountrieS3.setAttribute('src', element.imgUrl)
  divCountries3.appendChild(divCountrieS3)
  divCountrieS3.setAttribute(
    'style',
    'padding:20px; display:flex; justify-content:space-around; align-items:center;'
  )
  divCountrieS3.setAttribute('id', `country-delete-${index}`)
  hCountrieS3.setAttribute(
    'style',
    'text-align:center; text-transform:uppercase;'
  )
  imgCountrieS3.setAttribute('style', 'width:150px; height:150px;')
  divCountrieS3.appendChild(hCountrieS3)
  divCountrieS3.appendChild(imgCountrieS3)
  divCountrieS3.appendChild(buttonDel)
  buttonDel.addEventListener('click', () => {
    divCountries3.removeChild(divCountrieS3)
  })
}
