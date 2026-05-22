var products = [
    {
        id: 1, name: "mobile1", price: 200, image: "../images/mobile.png"
    },
    {
        id: 2, name: "mobile2", price: 400, image: "../images/mobile.png"
    },
    {
        id: 3, name: "mobile3", price: 600, image: "../images/mobile.png"
    }, {
        id: 4, name: "mobile4", price: 800, image: "../images/mobile.png"
    }
]

function showPro() {
    let data = ""
    products.map((v, index) => (
        data += `
            <div class="col-lg-3">
            <div class="card">
                <img src="${v.image}" height="200px" width="200px" alt="">
                <div class="card-body">
                    <span>name:${v.name}</span>
                    <span>price:${v.price}</span>
                    <button class="btn btn-warning" onclick="cartFun(${v.id})">cart</button>
                </div>
            </div>
        </div>
            `
    ))
    document.getElementById("productsData").innerHTML = data

}
showPro()





function searchFun(event) {
    event.preventDefault()
    let input = document.getElementById("searchInput").value
    console.log("input", input)

    // let output=products.filter((v,i)=>v.name.toLowerCase().includes(input.trim().toLowerCase()))
    let output = products.filter((v, i) => v.price >= 600)
    let data = ""
    output.map((v, i) => (
        data += `
            <div class="col-lg-3">
            <div class="card">
                <img src="${v.image}" height="200px" width="200px" alt="">
                <div class="card-body">
                    <span>name:${v.name}</span>
                    <span>price:${v.price}</span>
                </div>
            </div>
        </div>
        `
    ))
    document.getElementById("serachOutput").innerHTML = data

}

let cart = []
let totalAmount=0
console.log("outside cart", cart);


function cartFun(proID) {
    let cartdata = products.find((v) => v.id == proID)
    console.log("cartdata", cartdata);

    let existing=cart.find((value)=>value.id == proID)
    
    if(existing){
        cartdata.quantity++
        totalAmount= cartdata.price + totalAmount
    }
    else{
        cart.push(cartdata)
        cartdata.quantity = 1
        totalAmount= cartdata.price 
    }
    document.getElementById("total").innerHTML=totalAmount
    console.log("cart", cart);
    showCart(cart)
}
// crud = create , read , update , delete 

function showCart(cartPRO) {
    console.log("cartPRO",cartPRO);
    
    let data = ""
    cartPRO.map((v) => (
        data += `
         <tr>
             <td> <img src="${v.image}" height="100" width="100"> </td>
              <td>${v.name}</td>
              <td>${v.price}</td>
              <td>${v.quantity}</td>
              <td><button class="btn btn-close" onclick="deleteCart(${v.id})"></button></td>
            </tr>
        `
    ))
    document.getElementById("cart-body").innerHTML=data
}



function deleteCart(proID){

let removeItem = cart.find((v)=>v.id== proID)
console.log("removeItem",removeItem);


if(removeItem.quantity > 1){
    removeItem.quantity--
    totalAmount=totalAmount - removeItem.price
}
else{
    cart=cart.filter((v)=>v.id != proID )
   totalAmount=totalAmount - removeItem.price

}
showCart(cart)
document.getElementById("total").innerHTML=totalAmount

}