const inside=document.querySelector(".inside")
const out=document.querySelector(".out")
const nav=document.querySelector(".first")

inside.addEventListener("click",()=>{
    nav.classList.add("active")
})
out.addEventListener("click",()=>{
    nav.classList.remove("active")
})