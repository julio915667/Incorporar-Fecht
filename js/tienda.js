const addToShoppingCartButtons= document.querySelectorAll(".addToCart")

addToShoppingCartButtons.forEach(addtoCartButton =>{
addtoCartButton.addEventListener("click", addToCartClick)

})
const documentCreateCart= document.querySelector(".shoppingCartItemsContainer")
function addToCartClick(e) {
const button= e.target
const items = button.closest(".card")
const itemTitle= items.querySelector(".card-title").textContent;
const itemPrice = items.querySelector(".card-price").textContent
const itemImg = items.querySelector(".card-img-top").src
addToShoppingCart(itemTitle, itemPrice, itemImg)
sessionStorage.setItem("Carrito", JSON.stringify(itemTitle))
removeSessionStorage()

}

function removeSessionStorage(){
    const sessionStorageDel = document.querySelector(".buttonDelete")
    sessionStorageDel.addEventListener("click", ()=>{
        sessionStorage.clear
    })

}


//comprar button

const comprarButton = document.querySelector(".comprarButton")
comprarButton.addEventListener("click",comprarButtonClicked)
function comprarButtonClicked() {
    documentCreateCart.innerHTML = '';
    sumShopCartTotal();
  }

function addToShoppingCart(itemTitle, itemPrice, itemImg){
    
   const shoppingCartRow = document.createElement("div")
   const shoppingCartContent=`
   <div class="row shoppingCartItem">
   <div class="col-6">
       <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
           <img src=${itemImg} class="shopping-cart-image">
           <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
       </div>
   </div>
   <div class="col-2">
       <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
           <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
       </div>
   </div>
   <div class="col-4">
       <div
           class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
           <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
               value="1">
           <button class="btn btn-danger buttonDelete" type="button">X</button>
       </div>
   </div>
</div>`;
shoppingCartRow.innerHTML = shoppingCartContent;
documentCreateCart.append(shoppingCartRow);



//remover Card del Item
shoppingCartRow.querySelector(".buttonDelete").addEventListener("click", removeShoppingCartItem)
//suma del total
sumShopCartTotal()

//++ items
shoppingCartRow.querySelector(".shoppingCartItemQuantity").addEventListener("change",cuandoCambia)


}


function sumShopCartTotal(){
    let total=0
    
    const shoppingCartTotal = document.querySelector(".shoppingCartTotal")
    const shoppingCartItems= document.querySelectorAll(".shoppingCartItem")

    shoppingCartItems.forEach(shoppingCartItem =>{


        
      const shoppingCartItemPriceElement=  shoppingCartItem.querySelector(".shoppingCartItemPrice")
      const shoppingCartItemPrice = Number(shoppingCartItemPriceElement.textContent.replace("$", ""))
     
       const shoppingCartItemQuantityElement=  shoppingCartItem.querySelector(".shoppingCartItemQuantity")
       const shoppingCartItemQuantity = Number(
        shoppingCartItemQuantityElement.value
      )
      total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
    
    })
    
    shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
}

//funcion para remover Card del producto
function removeShoppingCartItem(e){
const buttonClick = (e.target)
buttonClick.closest(".shoppingCartItem").remove()
sumShopCartTotal()
}

//funcion para cuando agregar mas productos
function cuandoCambia(e){
const change= e.target
if(change.value<=0) change.value=1;
sumShopCartTotal()

}


  //const dates= sessionStorage.setItem("Carrito", JSON.stringify(date));
  //  console.log(dates)

    
  



/*const myModal = document.getElementById('myModal') 
const myInput = document.getElementById('myInput')  
myModal.addEventListener('shown.bs.modal', () => {  myInput.focus() }) */

