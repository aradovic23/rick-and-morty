import {
    getData
} from './fetch.js'

getData().then(dataFetch => {
    renderChars(dataFetch);
    console.log(dataFetch)
});

const main = document.querySelector('#main')

function renderChar(dataFetch) {
    const card = document.createElement('div')
    card.setAttribute('class', 'char-card')

    const name = document.createElement('h3')
    name.innerHTML = `${dataFetch.name}`

    const image = document.createElement('img')
    image.setAttribute('src', `${dataFetch.image}`)

    const button = document.createElement('button')
    button.innerHTML = 'Like'

    main.appendChild(card)
    card.appendChild(image)
    card.appendChild(name)
    card.appendChild(button)

    button.addEventListener('click', () => {
        button.classList.toggle('liked')
    })

    image.addEventListener('click', () => {
        localStorage.setItem('id', `${dataFetch.id}`)
        console.log(`${dataFetch.id}`);
        window.location = 'character.html'
    })
}



function renderChars(dataFetch) {
    dataFetch.forEach(e => {
        renderChar(e)
    });
}