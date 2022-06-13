
let btn = document.querySelector('.btn-o')
let conte = document.querySelector('.go-op')
let dinpu = document.querySelector('input')
let numero = 0
let seach = document.querySelector('.seach-go')


conte.setAttribute('style', 'display:none;')
btn.addEventListener('click', (e)=>{
    numero++
    e.preventDefault()
    
    if (numero == 1){
        conte.setAttribute('style', 'display:grid;')
    }
    if (numero == 2){
        conte.setAttribute('style', 'display:none;')
        numero = 0
    }
})

seach.addEventListener('click', e =>{
    e.preventDefault()
    console.log(dinpu.value)
    if(dinpu.value == ''){
        
    }
    else{
        window.location.assign('none.html')
    }
    
    
})


dinpu.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        e.preventDefault()
        if(dinpu.value == ''){
            
            alert('INGRESA ALGO')
        }
        else{
            window.location.assign('none.html')
        }
    }
});













