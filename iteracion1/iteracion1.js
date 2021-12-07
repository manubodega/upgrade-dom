window.onload = () => {
    let button1 = document.querySelector(".showme")
    console.log(button1)

    let hpillado = document.querySelector("#pillado")
    console.log(hpillado)

    let parrafos = document.getElementsByTagName("p")
    console.log(parrafos)
    
    let pokemon = document.getElementsByClassName('pokemon')
    console.log(pokemon)

    // let funcion = document.getElementsByTagName("span").getElementsByName("testMe")
    let funcion = document.querySelectorAll('[data-function="testMe"]')
    // forEach((prop)  => {
    //     console.log(prop)

    // })
    console.log(funcion)

    console.log(funcion[3])
   
}