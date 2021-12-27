let vari = document.querySelector(".fn-insert-here")

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']

window.onload = () => {
    var body = document.getElementsByTagName("body")[0];

    let div = document.createElement('div')
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')

    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let p3 = document.querySelector('.fn-insert-here')

    let ul = document.createElement('ul')

    document.body.append(div)
    document.body.append(div2)
    document.body.append(div3)
    document.body.append(p2)
    document.body.append(ul)
    div2.appendChild(p1)

    for (let i = 0; i < 6; i++){
        div3.appendChild(document.createElement('p'))
    }

    p2.innerText = "Soy dinámico!"
    p3.innerText = "Wubba Lubba dub dub"

    apps.forEach((producto) => {
        ul.appendChild(document.createElement('li')).innerText = producto
    })

    document.querySelectorAll('.fn-remove-me').forEach((clase) => {
        clase.remove()
    })

    let p4 = document.createElement('p')
    p4.innerText = "Voy en medio!"
    body.insertBefore(p4,body.children[6])

    let arrayp = document.querySelectorAll('.fn-insert-here')
    arrayp.forEach((item) => {
        item.appendChild(document.createElement('P')).innerText = 'Voy dentro!'
    })
}