/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;


function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  // console.log(cartItems.length)
  console.log(cart)
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)

function clearCart() {

  // let table = document.getElementById("cart")
  // table.empty()
  // let tableHeaderRowCount = 1;
  // let rowCOUNT = table.rows.length;
  // for (let i = tableHeaderRowCount ; i< rowCOUNT ; i++){
  //   table.deleteRow(tableHeaderRowCount);
  // }
  // for (let i=0 ; i< cartItems.length ; i++ ) {
  //   document.getElementById("cart").deleteRow(i);

  // }


}

loadCart();
clearCart();
// console.log(cart);

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  let tb = document.querySelector("tbody")
  for (let i = 0; i < cart.items.length; i++) {

    var row = document.createElement("tr");


    tb.appendChild(row);
    let td1 =document.createElement("td")
    let td2 =document.createElement("td")
    let td3 =document.createElement("td")
    td1.textContent="X";
    td2.textContent=cart.items[i].quantity;
    td3.textContent=cart.items[i].product;
    row.appendChild(td1)
    row.appendChild(td2)
    row.appendChild(td3)

  }


  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
    // var i = r.parentNode.parentNode.rowIndex;
    // document.getElementById("myTable").deleteRow(i);
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
