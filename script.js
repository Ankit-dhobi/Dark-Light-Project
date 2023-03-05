let body = document.getElementById('body')
let btn = document.getElementById('btn')
let text = document.getElementById('text')

btn.addEventListener('click', toglebtn)
function toglebtn(){
    if(btn.textContent.includes('Dark')){
        body.style.backgroundColor = "black"
        text.style.color = "white"
        btn.textContent = "Light Mode"
    }else{
        body.style.backgroundColor = "white"
        text.style.color = "black"
        btn.textContent = "Dark Mode"
    }
}