function colorPicker() {
    let colour = document.querySelector('#color').value
    document.body.style.backgroundColor = colour
}

document.querySelector('#text').onkeyup = function (event) {
    //  document.querySelector('#label').textContent = event.target.value
    document.querySelector('#label').innerHTML = event.target.value
}

document.querySelector('#submit').onclick = function () {
    const value = document.querySelector('#comment').value
    const list = document.querySelector('#list')
    const li = document.createElement('li') // <li></li>
    li.textContent = value // <li>some value is here now</li>
    list.appendChild(li)
    // document.querySelector('#list').appendChild(li)
}

function addImage() {
    const image = document.createElement('img')
    image.src = 'https://picsum.photos/id/1032/200'
    document.querySelector('figure').appendChild(image)
}

let fruits = ['apple', 'orange', 'kiwi', 'strawberry',
    'lemon', 'watermelon', 'lime', 'banana'
]

fruits.forEach(function (fruit) {
    const p = document.createElement('p')
    p.textContent = fruit
    document.querySelector('#fruits').appendChild(p)
})

// const images = [1040, 1041, 1042, 1043, 1044, 1045]

// ids.forEach(function (id) {
//     console.log(id)
//     const image = document.createElement('img')
//     image.src = 'https://picsum.photos/id/' +
//         id + '/200'
//     image.width = 50
//     document.querySelector('#figure').
//     appendChild(image)
// })

// for (let i = 1; i < 10; i++) {
//     const img = document.createElement('img')
//     img.src = 'https://picsum/photos.id' + i + '/50'
//     img.width = 100
//     const figure = document.querySelector('#figure')
//     figure.appendChild(img)
// }


for (let i = 1000; i < 1099; i++) {
    const img = document.createElement('img')
    img.src = 'https://picsum.photos/id/' + i + '/200'
    img.width = 100
    const figure = document.querySelector('#figure')
    figure.appendChild(img)
}

document.querySelector('[data-my-btn]').onclick = function () {
    // do stuff here
}