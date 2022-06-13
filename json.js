const icons = [
    {
        name:'cuenta',
        iconC1lass: 'material-symbols-outlined',
        type: 'recycling',
        color:'blue'
    },
    {
        name:'DONE',
        iconC1lass: 'material-symbols-outlined',
        type: 'done',
        color:'blue'
    },
    {
        name:'LOGOUT',
        iconC1lass: 'material-symbols-outlined',
        type: 'logout',
        color:'red'
    },
    {
        name:'TOGGLE ON',
        iconC1lass: 'material-symbols-outlined',
        type: 'toggle_on',
        color:'blue'
    },
    {
        name:'cuenta',
        iconC1lass: 'material-symbols-outlined',
        type: 'grade'
        ,
        color:'red'
    },
    {
        name:'cuenta',
        iconC1lass: 'material-symbols-outlined',
        type: 'delete_forever'
        ,
        color:'red'
    },
    {
        name:'cuenta',
        iconC1lass: 'material-symbols-outlined',
        type: 'key',
        color:'blue'
    },
    {
        name:'cuenta',
        iconC1lass: 'material-symbols-outlined',
        type: 'shopping_cart_checkout',
        color:'red'
    },
    {
        name:'cuenta',
        iconC1lass: 'material-symbols-outlined',
        type: 'library_add'
    },
    {
        name:'cuenta',
        iconC1lass: 'material-symbols-outlined',
        type: 'keyboard_voice',
        color:'blue'
    },
    {
        name:'cuenta',
        iconC1lass: 'material-symbols-outlined',
        type: 'view_timeline',
        color:'yellow'
    },
    {
        name:'cuenta',
        iconC1lass: 'material-symbols-outlined',
        type: 'hide_source',
        color:'yellow'
    },
    {
        name:'cuenta',
        iconC1lass: 'material-symbols-outlined',
        type: 'view_compact_alt',
        color:'yellow'
    },
    {
        name:'cuenta',
        iconC1lass: 'material-symbols-outlined',
        type: 'install_mobile',
        color:'blue'
    },
    {
        name:'cuenta',
        iconC1lass: 'material-symbols-outlined',
        type: 'php',
        color:'yellow'
    },
    {
        name:'cuenta',
        iconC1lass: 'material-symbols-outlined',
        type: 'transcribe',
        color:'blue'
    },
    {
        name:'cuenta',
        iconC1lass: 'material-symbols-outlined',
        type: 'browse_gallery',
        color:'yellow'
    },
    {
        name:'cuenta',
        iconC1lass: 'material-symbols-outlined',
        type: 'css',
        color:'yellow'
    },
    {
        name:'cuenta',
        iconC1lass: 'material-symbols-outlined',
        type: 'switch_left',
        color:'red'
    },
    {
        name:'cuenta',
        iconC1lass: 'material-symbols-outlined',
        type: 'data_thresholding',
        color:'yellow'
    },
    {
        name:'cuenta',
        iconC1lass: 'material-symbols-outlined',
        type: 'sync_problem',
        color:'blue'
    }
]

let op = document.querySelector('.go-op')

const clash = icons.map(e =>{
    let cont = document.createElement('div')
    let li = document.createElement('span')
    let text = document.createElement('p')
    text.textContent = `${e.name}`
    li.textContent = `${e.type}`
    cont.classList = 'cont-go-all'
    li.classList = `${e.iconC1lass}`
    text.classList = `text-go`
    li.setAttribute('style', `color:${e.color};`)
    op.appendChild(cont)
    cont.appendChild(li)
    cont.appendChild(text)
    
})




