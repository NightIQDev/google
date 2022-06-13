let one = document.querySelector('.one')

let two = document.querySelector('.two')

let three = document.querySelector('.three')

let four = document.querySelector('.four')

let five = document.querySelector('.five')

let six = document.querySelector('.six')



one.addEventListener('click', ()=>{
    one.classList = ' fing'
    two.classList.remove('fing')
    three.classList.remove('fing')
    four.classList.remove('fing')
    five.classList.remove('fing')
    six.classList.remove('fing')
})

two.addEventListener('click', ()=>{
    two.classList = ' saas fing'
    one.classList.remove('fing')
    three.classList.remove('fing')
    four.classList.remove('fing')
    five.classList.remove('fing')
    six.classList.remove('fing')
})

three.addEventListener('click', ()=>{
    three.classList = ' fing'
    two.classList.remove('fing')
    one.classList.remove('fing')
    four.classList.remove('fing')
    five.classList.remove('fing')
    six.classList.remove('fing')
})

four.addEventListener('click', ()=>{
    four.classList = ' fing'
    two.classList.remove('fing')
    one.classList.remove('fing')
    three.classList.remove('fing')
    five.classList.remove('fing')
    six.classList.remove('fing')
})

five.addEventListener('click', ()=>{
    five.classList = ' fing'
    two.classList.remove('fing')
    one.classList.remove('fing')
    three.classList.remove('fing')
    four.classList.remove('fing')
    six.classList.remove('fing')
})

six.addEventListener('click', ()=>{
    six.classList = ' fing'
    two.classList.remove('fing')
    one.classList.remove('fing')
    three.classList.remove('fing')
    four.classList.remove('fing')
    five.classList.remove('fing')
})