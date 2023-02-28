console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () =>{
    fetchRandom()
    fetchBreeds()
})

function fetchRandom(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((res) => res.json())
    .then(dogs => renderRandom(dogs))
    return fetch("https://dog.ceo/api/breeds/image/random/4")
}

function renderRandom(dogs){
    const div = document.querySelector("#dog-image-container")
    dogs.message.forEach(dog => {
        const pic = document.createElement("img")
        pic.setAttribute("src", `${dog}`)
        div.append(pic)
    })
}

function fetchBreeds(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then(breeds => renderBreeds(breeds))
    return fetch("https://dog.ceo/api/breeds/list/all")
}

function renderBreeds(breeds){
    const ul = document.querySelector("#dog-breeds")
    const keys = Object.keys(breeds.message)
    const values = Object.values(breeds.message)


    keys.forEach(breed => {
        const li = document.createElement("li")
        li.innerText = breed
        li.setAttribute("class", breed[0])
        // ul.append(li)
        if(breeds.message[breed].length != [""]){
            breeds.message[breed].forEach(element => {
                const newUl = document.createElement("ul")
                const newLi = document.createElement("li")
                newLi.innerText = element
                li.append(newUl)
                newUl.append(newLi)
            })
        }
        ul.append(li)
        li.addEventListener("click", () =>{
            li.style.color = "red" 
        })
    })
    const dropDown = document.querySelector("#breed-dropdown")
    const a = document.querySelectorAll(".a")
    const b = document.querySelectorAll(".b")
    const c = document.querySelectorAll(".c")
    const d = document.querySelectorAll(".d")
    
    dropDown.setAttribute("onchange", "dropFunc(value)")

    dropDown.onchange = function dropFunc(answer){
        if(answer.target.value === "a"){
            a.forEach(element =>{
                element.removeAttribute("hidden")
            })
            b.forEach(element =>{
                element.setAttribute("hidden", "")
            })
            c.forEach(element =>{
                element.setAttribute("hidden", "")
            })
            d.forEach(element =>{
                element.setAttribute("hidden", "")
            })
        }
        else if(answer.target.value === "b"){
            a.forEach(element => {
                element.setAttribute("hidden", "")
            })
            b.forEach(element => {
                element.removeAttribute("hidden")
            })
            c.forEach(element => {
                element.setAttribute("hidden", "")
            })
            d.forEach(element => {
                element.setAttribute("hidden", "")
            })
        }
        else if(answer.target.value === "c"){
            a.forEach(element => {
                element.setAttribute("hidden", "")
            })
            b.forEach(element => {
                element.setAttribute("hidden", "")
            })
            c.forEach(element =>{
                element.removeAttribute("hidden")
            })
            d.forEach(element => {
                element.setAttribute("hidden", "")
            })
        }
        else if(answer.target.value === "d"){
            a.forEach(element => {
                element.setAttribute("hidden", "")
            })
            b.forEach(element => {
                element.setAttribute("hidden", "")
            })
            c.forEach(element => {
                element.setAttribute("hidden", "")
            })
            d.forEach(element =>{
                element.removeAttribute("hidden")
            })
        }
    }
}


