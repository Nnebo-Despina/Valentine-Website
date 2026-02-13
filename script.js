let noBtn = document.getElementById("nBtn")
let yesBtn = document.getElementById("yBtn")
let headerTag = document.getElementById("headerTag")
let btnCtrl = document.getElementById("btnCtrl")
let index = 0
let nofntSize = 19
let yfntSize = 19


let noArrayAns = ["Really?", "Are you sure?", "C'mon, pleaseeee? 🥺", "Why are you still pressing this? 😔", "Please princess?"]


yesBtn.addEventListener('click', () => {
    btnCtrl.style.display = "none"
    headerTag.textContent = "Thank you, princess!! 💖"
})

noBtn.addEventListener('click', () => {
    if (index <= 4) {
        noBtn.textContent = noArrayAns[index]
        index = (index + 1) % noArrayAns.length 
        nofntSize = (nofntSize - 4)
        noBtn.style.fontSize = nofntSize + 'px'
        yfntSize = (yfntSize + 6)
        yesBtn.style.fontSize = yfntSize + 'px'

    } else {
        noBtn.style.display = 'none'
    }
    
})