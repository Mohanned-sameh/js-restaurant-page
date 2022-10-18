import './style.css'

const homePage = document.querySelector('#home')
const menuPage = document.querySelector('#menu')
const contactPage = document.querySelector('#contact')
const mainDiv = document.querySelector('#content')
window.onload = loadHomePage
// window.onload = loadMenuPage;

function loadHomePage() {
    mainDiv.innerHTML = ""
    const homeContent = document.createElement('div');
    homeContent.setAttribute('class','home-content')

    const homeContent2 = document.createElement("div")
    homeContent2.setAttribute('class' , 'home-content2')

    
    const header1 = document.createElement('h1')
    header1.textContent = "Something hot. Something tasty."
    const headerP = document.createElement('p')
    headerP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem temporibus laudantium quis, voluptatum eius nam sapiente saepe sequi maiores numquam incidunt, nemo eligendi ipsum quia rerum, iure eos? Aliquam ab ut officia cum iusto ipsa vel corporis aperiam sit ex vitae quasi nam voluptatem omnis, totam itaque quam quod amet."


    const hours = document.createElement('div')
    hours.setAttribute('class','hours')

    const hoursHeader = document.createElement('h1')
    hoursHeader.innerText = "Open Hours"

    var openTimes = 
    ["Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, fugit!",
     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, fugit!",
     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, fugit!",
     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem, fugit!"]
     

    mainDiv.appendChild(homeContent)
    mainDiv.appendChild(homeContent2)
    homeContent.appendChild(header1)
    homeContent.appendChild(headerP)
    homeContent2.appendChild(hours)
    hours.appendChild(hoursHeader)

     for (var i = 0; i < openTimes.length; i++) {
        var paragraph = document.createElement("p")
        paragraph.innerHTML = openTimes[i];
        hours.appendChild(paragraph)
    }
}


function loadMenuPage() {
    mainDiv.innerHTML = 
    `<div class="menuPage">
    <ul class="food">
    <li>Pizza</li>
    <li>Macaroni</li>
    <li>Cheese Burger</li>
    <li>MeatBalls</li>
    <li>Margherita</li>
    <li>Special Order</li>
    </ul>
    <ul class="prices">
    <li>10$</li>
    <li>15$</li>
    <li>20$</li>
    <li>25$</li>
    <li>10$</li>
    <li>50$</li>
    </ul>
    </div>`
}
function loadContactPage() {
    mainDiv.innerHTML = 
    `<div class="contact">
    
    </div>`
}
contactPage.addEventListener('click',loadContactPage)
homePage.addEventListener('click',loadHomePage)
menuPage.addEventListener('click',loadMenuPage)