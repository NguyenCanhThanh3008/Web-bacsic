const btnBuys = document.querySelectorAll(".js-buy-ticket")
const modal = document.querySelector(".js-modal")
const modalContainer = document.querySelector(".js-modal-container")
const modalClose = document.querySelector(".js-close-modal")

function showBuyTicker(){
    modal.classList.add("open")

}

function closeBuyTicker(){
    modal.classList.remove("open")

}

for(const btnBuy of btnBuys){
    btnBuy.addEventListener("click",showBuyTicker)
}

modalClose.addEventListener("click",closeBuyTicker)

modal.addEventListener("click",closeBuyTicker)
modalContainer.addEventListener("click",function(event){
    event.stopPropagation()
})