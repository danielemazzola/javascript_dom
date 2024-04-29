/* 1.1 Inserta dinamicamente en un html un div vacio con javascript.*/
const div = document.createElement('div')
document.body.appendChild(div)
/* 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript. */
const div2 = document.createElement('div')
const p = document.createElement('p')
document.body.appendChild(div2)
div2.appendChild(p)

/* 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript. */
const div3 = document.createElement('div')
document.body.appendChild(div3)
for (let index = 0; index < 6; index++) {
  const repeatPSix = document.createElement('p')
  div3.appendChild(repeatPSix)
}

/* 1.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'. */
const pDinamic = document.createElement('p')
pDinamic.textContent = 'I am a dinamic text'
document.body.appendChild(pDinamic)

/* 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */
const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

/* 1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.*/
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')
document.body.appendChild(ul)
for (const app of apps) {
  const li = document.createElement('li')
  li.textContent = app
  ul.appendChild(li)
}

/* 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me */
const removeAllClassFnRemoveMe = document.querySelectorAll('.fn-remove-me')
removeAllClassFnRemoveMe.removeAttribute
for (const classFnRemove of removeAllClassFnRemoveMe) {
  classFnRemove.remove()
}

/* 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild. */
const firstDiv = document.querySelectorAll('div.fn-insert-here')
for (let index = 0; index < firstDiv.length; index++) {
  const pGoMiddle = document.createElement('p')
  pGoMiddle.textContent = 'I go in the middle'
  if (index === 1) {
    const DIV = firstDiv[index]
    DIV.parentNode.insertBefore(pGoMiddle, DIV)
  }
}

/*1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here */
const firstDiv2 = document.querySelectorAll('div.fn-insert-here')
for (let index = 0; index < firstDiv2.length; index++) {
  const element = firstDiv2[index]
  const pGoMiddle2 = document.createElement('p')
  pGoMiddle2.textContent = 'I go in the middle'
  element.appendChild(pGoMiddle2)
}
