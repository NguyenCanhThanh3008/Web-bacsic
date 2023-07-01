const btnBuys = document.querySelectorAll(".js-buy-ticket")
const modal = document.querySelector(".js-modal")
const modalContainer = document.querySelector(".js-modal-container")
const modalClose = document.querySelector(".js-close-modal")

function showBuyTicker() {
    console.log("abc")
    modal.classList.add("open")

}

function closeBuyTicker() {
    console.log("abc")
    modal.classList.remove("open")

}

for (const btnBuy of btnBuys) {
    btnBuy.addEventListener("click", showBuyTicker)
}

modalClose.addEventListener("click", closeBuyTicker)

modal.addEventListener("click", closeBuyTicker)
modalContainer.addEventListener("click", function (event) {
    event.stopPropagation()
})

let header = document.getElementById("header")
let menu = document.getElementById("mobile-menu")
let headerHeiight = header.clientHeight
menu.onclick = function () {
    let isClose = header.clientHeight === headerHeiight
    if (isClose) {
        header.style.height = "227px"
    } else {
        header.style.height = null

    }
}

let menuheaders = document.querySelectorAll(".nav li a[href*='#']")
for (let i = 0; i < menuheaders.length; i++) {
    let menuheader = menuheaders[i]
    menuheader.onclick = function (event) {
        let moreHeader = this.nextElementSibling && this.nextElementSibling.classList.contains("subnav")
        if (!moreHeader) {
            header.style.height = null
            
        }else{
            event.prevenDefault();
            console.log("abc")

        }

    }
}