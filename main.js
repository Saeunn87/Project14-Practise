document.querySelector('#btn').addEventListener('click', btnClicked)

function btnClicked() {
    document.body.style.backgroundColor = '#ee6'
}

function anotherFunctionCall() {
    document.body.style.backgroundColor = '#080'
}

document.querySelector('#button').onclick = function () {
    document.body.style.backgroundColor = '#000'
}