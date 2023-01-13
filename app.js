const hams = document.querySelector(".ham")
const menu = document.querySelector(".head")
const bar = document.querySelectorAll(".bar")

hams.addEventListener("click",() => {
    hams.classList.toggle("active");
    menu.classList.toggle("active");
    bar.forEach(item => item.classList.toggle("color"))
})

document.querySelector(".link").foreach(n => n.addEventListener("click", () => {
    hams.classList.remove("active")
    menu.classList.remove("active")
    
}))

