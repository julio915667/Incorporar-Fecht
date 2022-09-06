//Sweet alert
  //agregado al Carrito.
  const alertCart= () => {
    Swal.fire({
      title: 'Agregado al Carrito',
      toast: true,
      position: "center-end",
      text: "Comprado", 
      icon: 'success',
      showConfirmButton: false,
      timer: 5000, 
      background: "white",
      timer: 5000
    })}
   



    const alertCartDel= () => {
     Swal.fire({
        title: 'Eliminado',
        toast: true,
        position: "bottom-end",
        text: "Eliminado del Carrito", 
        icon: 'error',
        showConfirmButton: false,
        timer: 5000, 
        background: "white",
        timer: 5000
      })
    }
    const cartComprado= () => {
     
     swal({
      title: "Compra Exitosa",
      text: "Gracias Por su Compra!",
      icon: "success",
      button: "Cerrar",
    });
     
    }


let dateOfProducts=[]
const pedirDatos = async ()=>{
  await fetch('js/dates.json')
    .then((response) => response.json())
    .then((date) =>{
      dateOfProducts= {nombre,description,precio,src,id} = date
      crearCards()
    })
  
  }
  pedirDatos()

const containerDiv = document.querySelector(".container");
const carritoDiv = document.querySelector(".shoppingCartItemsContainer");

//USO DE JSON
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];



function crearCards() {
  //reemplazo por la variable que desestructure de productos: productOne
  dateOfProducts.forEach((prod) => {
    containerDiv.innerHTML += `
    <div class="card col-6" style="width: 18rem;">
            <img src=${prod.src} class="card-img-top" alt="...">
            <div class="card-body jsDiv">
                <h5 class="card-title" id="titleHead1">${prod.nombre}</h5>
                <p class="card-text">
                    ${prod.description}
                </p>
                
                <p class="card-price">${prod.precio}$</p>
                <button class="btn btnCarrito btnEdit" id="btn-agregar${prod.id}">Agregar al Carrito</button>
            </div>`
        
  });
  agregarFuncionalidad();
}

function agregarFuncionalidad() {
   //reemplazo por la variable que desestructure de productos: productOne
   dateOfProducts.forEach((prod) => {
    document
      .querySelector(`#btn-agregar${prod.id}`)
      .addEventListener("click", () => {
        console.log(prod);
        agregarAlCarrito(prod);
      });
  });
}

function agregarAlCarrito(prod) {
  let existe = carrito.some((productoSome) => productoSome.id === prod.id);
  if (existe === false) {
    prod.cantidad = 1;
    carrito.push(prod);
  } else {
    let prodFind = carrito.find((productoFind) => productoFind.id === prod.id);
    prodFind.cantidad++;
    //prod.cantidad++
  }
 

  //carrito.push(prod);
  console.log(carrito);
  renderizarCarrito();
}

function renderizarCarrito() {
  carritoDiv.innerHTML = "";
  carrito.forEach((prod) => {
    carritoDiv.innerHTML += `
    <div class="row shoppingCartItem">
   <div class="col-6">
       <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
           <img src=${prod.src} class="shopping-cart-image">
           <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${prod.nombre}</h6>
       </div>
   </div>
   <div class="col-2">
       <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
           <p class="item-price mb-0 shoppingCartItemPrice">${prod.precio}</p>
       </div>
   </div>
   <div class="col-4">
       <div
           class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
           <div class="buttonItemDiv">
           <button class=" btn btnEdit" id="btn-borrar${prod.id}"><i class="fa-solid fa-trash-can"></i></button>
           <p class="shopping-cart-quantity-input shoppingCartItemQuantity mb-0 pb-0 mx-3">${prod.cantidad}</p></div>
       </div>
   </div>
</div>

     `;

  });

  sumShopCartTotal()
  //uso de JSON
  localStorage.setItem("carrito", JSON.stringify(carrito));
  borrarProducto();
  
}

function borrarProducto() {
  carrito.forEach((prod) => {
    document
      .querySelector(`#btn-borrar${prod.id}`)
      .addEventListener("click", () => {
        carrito = carrito.filter(
          (productoFilter) => productoFilter.id !== prod.id
        );
        renderizarCarrito();
        alertCartDel()
      });
  });
}

//crearCards();
renderizarCarrito();


//----------------------------------------EVENTOS------------------------------------------//
let btnCar = document.querySelectorAll(".btnCarrito")
for(let i=0;i<btnCar.length;i++){
     btnCar[i].addEventListener("click",function(){
          this.innerHTML ="Agregado al Carrito"
          this.style.backgroundColor= "red"
          this.style.fontWeight="bold"
          this.style.color="white"
          alertCart()
          btnCar[i].addEventListener("mouseout",function(){
               this.innerHTML ="Agregar al Carrito"
 this.style.backgroundColor= "#0d6efd"
          this.style.fontWeight="300"
          this.style.color="white"
          })
     })
    
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
      shoppingCartItemQuantityElement.textContent
    )
    total = total + shoppingCartItemPrice * shoppingCartItemQuantity;
  
  })
  
  shoppingCartTotal.innerHTML = `${total.toFixed(2)}$`;
}

const buttonComprar= document.querySelector(".comprarButton")
buttonComprar.addEventListener("click",()=>{
  cartComprado()
})



