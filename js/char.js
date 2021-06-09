import {
    charCall
} from './fetch.js'

const id = localStorage.getItem('id')

charCall(id).then(data => {
    singleCharacter(data);
    console.log(data);
})

const main = document.querySelector('#main')

function singleCharacter(data) {
    const card = document.createElement('div')
    card.setAttribute('class', 'single-card')

    const name = document.createElement('h3')
    name.innerHTML = `${data.name}`

    const image = document.createElement('img')
    image.setAttribute('src', `${data.image}`)

    const species = document.createElement('span')
    species.innerHTML = `Speices: ${data.species}`

    const location = document.createElement('span')
    location.setAttribute('class', 'location')
    location.innerHTML = `Where from: ${data.location.name}`

    const status = document.createElement('span')
    status.innerHTML = `Currently ${data.status}`

    main.appendChild(card)
    card.appendChild(image)
    card.appendChild(name)
    card.appendChild(species)
    card.appendChild(status)
    card.appendChild(location)


}