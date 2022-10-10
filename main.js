let btn01 = document.querySelector("#btnEjemplo01")

btn01.addEventListener("click", () => {
    let v1 = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]

    let tabla = document.querySelector("#tabla01")

    tabla.textContent = ""
    console.log(v1)

    for (let i = 0; i < 5; i++) {
        let ren = tabla.insertRow(-1)
        let col01 = ren.insertCell(0)
        let col02 = ren.insertCell(1)

        col01.textContent = i
        col02.textContent = v1[i]
    }
})

let btn02 = document.querySelector("#btnEjemplo02")

btn02.addEventListener("click", () => {
    let num = Number(document.querySelector("#numero02").value)
    let v1 = [num]

    for (let i =0; i < num; i++) {
        let num = Number(prompt("Ingresa un número:"))

        v1[i] = num
    }

    let tabla = document.querySelector("#tabla02")
    tabla.textContent = ""
    for (let i = 0; i < num; i++){ 
        let ren = tabla.insertRow(-1)
        let col01 = ren.insertCell(0)
        let col02 = ren.insertCell(1)

        col01.textContent = i
        col02.textContent = v1[i]
    }
})

let btn03 = document.querySelector("#btnEjemplo03")

btn03.addEventListener("click", () => {
    let num = Number(document.querySelector("#numero03").value)

    let v1 = [num]

    for(let i = 0; i < num; i++){
        let nR = Math.trunc(Math.random() * 100) + 100

        v1[i] = nR
    }

    let tabla = document.querySelector("#tabla03")
    tabla.textContent = ""

    for (let i = 0; i < num; i++) {
        let ren = tabla.insertRow(-1)
        let col01 = ren.insertCell(0)
        let col02 = ren.insertCell(1)

        col01.textContent = i
        col02.textContent = v1[i]
    }
})