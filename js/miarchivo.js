/*let boton = document.getElementById("boton")

boton.addEventListener('click', function(){
     alert("toco el boton")

})
let boton = document.getElementById("liveToastBtn");

boton.addEventListener('click', function(){
    // alert("Agregado al Carrito")
     boton.innerHTML= "Añadido al Carrito"
     boton.style.background= "red"
     boton.style.fontWeight = "bold"
})*/




const computer = [{
          name: "PC DE OFICINA",
          mother: "MOTHERBOARD H410",
          cpu: "MICRO INTEL CELERON G5905 DC 3.5GHZ",
          memory: "MEMORIA 8GB DDR4 2666 CRUCIAL UDIMM",
          disc: "SSD MARKVISION 240GB SATA III",
          props: "GABINETE KIT",
          price: "60.000$",
          thisIs: "Computadora"
     },
     {
          name: "PC GAMER",
          mother: "H510M PCIE 4.0 DDR4 USB 3.2",
          cpu: "INTEL I9 10MA GEN Dual Core",
          memory: "8GB 2666MHZ DDR4",
          disc: "1TB SATA3 WD BLUE",
          props: "GABINETE:Atx-Con Fuente 550W TECLADO, MOUSE USB, PARLANTES USB Potenciados",
          price: "95.000$",
          thisIs: "Computadora"
     }
]

const product = [{
          name: "Placa de Video ZOTAC GAMING",
          description: "GeForce GTX 1660 Ti 6GB ZT-T16610F-10L",
          price: "140.000$",
          thisIs: "Componente"
     },
     {
          name: "Ram",
          description: "16GB, 2300MZH",
          price: "10.000$",
          component: "Componente"
     },
     {
          name: "Fuente de Alimentacion",
          description: "MSI MPG A750GF",
          price: "25.000$",
          thisIs: "Componente"
     },
     {
          name: "Mouse Gamer",
          description: "Thermaltake Level 20 Rgb",
          price: "19.500$",
          thisIs: "Periferico"
     },
     {
          name: "Teclado Gamer",
          description: "Gadnic ZT800 QWERTY Outemu Blue español España color negro con luz RGB",
          price: "5000$",
          thisIs: "Periferico"
     },
     {
          name: "Monitor Gamer",
          description: "Monitor Gigabyte 24 pulgadas.",
          price: "50.000",
          thisIs: "Periferico"
     },
     {
          name: "Disco Duro Externo",
          description: "Western Digital WD Elements Portable WDBUZG0010BBK 1TB negro",
          price: "9.500$",
          thisIs: "Componente",
     }
]
//busqueda
/*function search(nameOfPc) {
     const date = computer.concat(product)
     nameOfPc = prompt("Ingrese el Nombre del Producto:")
     let computers = date.find(pc => pc.name == nameOfPc)
     console.log(computers)
}
search()

//-------------------------------------------------//

//filtrado

function filtrerPro(name) {
     const date = computer.concat(product)
     name = prompt("Ingrese el Filtro de lo que desea:")
     let thisWhat = date.filter(where => where.thisIs == name)
     console.log(thisWhat)
}

filtrerPro()*/

//<------------------DOM PARA LAS COMPUS ---------------------->

//Reemplazo por el Titulo del HTML
let title = document.getElementById("titleHead1")
title.innerHTML = computer[0].name 
//+ "<br>" + computer[0].price
let title2 = document.getElementById("titleHead2")
title2.innerHTML = computer[1].name 
//+ "<br>" + computer[1].price

function caracteristics(index, visualization) {
     let contenedor = document.createElement("ul");
     contenedor.innerHTML = `<li> ${computer[index].mother} </li>
 
                            <li> ${computer[index].cpu} </li>
 
                            <li> ${computer[index].memory} </li>
                            <li> ${computer[index].disc} </li>
                            <li> ${computer[index].props} </li>`;
     let divContainer = document.querySelector(visualization)
     divContainer.appendChild(contenedor);
}
caracteristics(0, ".jsDiv")
caracteristics(1, ".jsDiv2")

//DOM PARA productos
function caracteristicsOfProducts(index, visualization) {
     let contenedor = document.createElement("ul");
     contenedor.innerHTML = `<li> ${product[index].description} </li>
      
                          </li>`;
     let divContainer = document.querySelector(visualization)
     divContainer.appendChild(contenedor);
}

caracteristicsOfProducts(6, ".produc1")

let fuente = document.querySelector(".fuente")
fuente.innerHTML = `Fuente ${product[2].description}`
let mouseGamer = document.querySelector(".mouseGamer")
mouseGamer.innerHTML = `${product[3].name}`
caracteristicsOfProducts(3, ".mouse")
let tecladoGamer = document.querySelector(".teclado")
tecladoGamer.innerHTML = `${product[4].name}`
caracteristicsOfProducts(4, ".teclado1")
let monitor = document.querySelector(".monitor")
monitor.innerHTML = `${product[5].name}`
caracteristicsOfProducts(5, ".monitorDes")


/*-------------EVENTOS-*--------- */


/*const clickEvent= () => {
     eventBtn.innerHTML ="Agregado al Carrito"
     eventBtn.style.backgroundColor= "red"
     eventBtn.style.fontWeight="bold"
     eventBtn.style.color="white"
     }
  
     let eventBtn= document.getElementById("clickBtn")
     
     
     eventBtn.addEventListener("click",clickEvent)

eventBtn.removeEventListener("dblclick",clickEvent)
ondblclick = (clickEvent) => {
     eventBtn.innerHTML ="Agregar Al Carrito"
     eventBtn.style.backgroundColor= "#0b5ed79c"
     eventBtn.style.fontWeight="light"
     eventBtn.style.color="white"
} */

//----------------------------------------EVENTOS------------------------------------------//
let btnCar = document.getElementsByClassName("btn-carrito")
for(let i=0;i<btnCar.length;i++){
     btnCar[i].addEventListener("click",function(){
          this.innerHTML ="Agregado al Carrito"
          this.style.backgroundColor= "red"
          this.style.fontWeight="bold"
          this.style.color="white"
          btnCar[i].addEventListener("mouseout",function(){
               this.innerHTML ="Agregar al Carrito"
 this.style.backgroundColor= "#0b5ed79c"
          this.style.fontWeight="300"
          this.style.color="white"
          })
     })
}


