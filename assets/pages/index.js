var products = [
    {
        id: 1, name: "Shoes1", price: 200, image: "../images/fan.png"
    },
    {
        id: 2, name: "shoes2", price: 400, image: "../images/fan.png"
    },
    {
        id: 3, name: "shoes3", price: 600, image: "../images/fan.png"
    }, {
        id: 4, name: "shoes4", price: 800, image: "../images/fan.png"
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
console.log("outside cart", cart);


function cartFun(proID) {
    let cartdata = products.find((v) => v.id == proID)
    console.log("cartdata", cartdata);

    cart.push(cartdata)
    console.log("cart", cart);
    showCart(cart)
}


function showCart(cartPRO) {
    let data = ""
    cartPRO.map((v) => (
        data = `
         <tr>
             <td> <img src="${v.image}" height="100" width="100"> </td>
              <td>${v.name}</td>
              <td>${v.price}</td>
              <td>${v.quantity}</td>
              <td><button class="btn btn-close"></button></td>
            </tr>
        `
    ))
    document.getElementById("cart-body").innerHTML=data
}
