let loveCartCount;
let addCartCount;
let countLove = 0;
var Carts = [];
let index;
let sp;
class Cart {
  image;
  title;
  price;
  add;
  like;
  constructor(image, title, price, infor) {
    this.image = image;
    this.title = title;
    this.price = price;
    this.infor = infor;
  }
}

function drawTable() {
  let data = "";
  data += "<table><tbody>";
  data += '<tr class="line">';
  data += ' <th class="product-col py-3" colspan="3">Product</th>';
  data += '  <th class="price-col text-center">Price</th>';
  data += ' <th class="quantity-col text-center">Quantity</th>';
  data += '  <th class="total-col text-end">Total</th>';
  data += " </tr>";

  for (let i = 0; i < Carts.length; i++) {
    data += ' <tr class="product-row text-center" >';
    data += '<td class="check-col"><input type="checkbox" checked></td>';
    data += ' <td class="img-col"><img src="' + Carts[i].image + '"></td>';
    data += '<td class="content-col text-start">';
    data += '<div><p>' + Carts[i].title + '</p>';
    data += '<div><p><b>Category: </b>Figures</p>';
    data +=
      ' <p><b>Vendor: </b>USA Animate Online Shop</p> <p><b>Weight: </b>3.22 lb</p></div></div>';
    data += ' <button  >Remove</button>';
    data += ' </td>';
    data += '<td class="price-col">';
    data +=
      '<p style="color: red; font-size: 16px;" class="py-2 fw-bold money">' +
      Carts[i].price +
      '</p> </td>';
    data += '<td class="quantity-col">';
    data += ' <div class="input-group">';

    data += '<button>-</button>';
    data += '  <input class="_2rGMck _8rdz59" type="text" value="2">';
    data += '<button>+</button>';
    data += ' </div>';
    data += '</td>';
    data += ' <td class="total-col text-end">';
    data +=
      '  <p style="color: red; font-size: 16px;" class=" fw-bold money">' +
      2 * Carts[i].price +
      '</p>';
    data += '</td>';
    data += '</tr>';
  }
  data += ' <tr class="product-row product-sum">';
  data += ' <td class="check-col"><input type="checkbox" checked ></td>';
  data +=
    ' <td colspan="4" style="font-size: 20px;padding-left: 16px;">Total</td>';
  data += '<td class="text-end">';
  data +=
    '<p style="color: red; font-size: 16px;" class=" fw-bold money">$694.49 </p> </td>';
  data += '</tr><tr >';
  data += '<td></td>';
  data += '<td colspan="5" class="pt-3 pb-1 ps-3">';
  data += ' <p>Add a note to your order</p>';
  data +=
    '  <textarea name="" style="width: 100%; height: 150px;" ></textarea>';
  data +=
    '<p style="background-color: #fff5c3;"class=" p-2 my-2">Animate usa online shop process all orders in USD. Shipping & taxes calculated at checkout.</p>';
  data += '</td></tr>';
  data += '<tr class="checkout">';
  data += ' <td></td>';
  data += ' <td colspan="5" class=" pb-2 pt-2 ps-3" >';
  data += ' <div class="d-flex justify-content-between">';
  data += '<button type="">Continue Shopping</button>';
  data += '<button>Proceed To Checkout</button>';
  data += '</div>';
  data += '</td>';
  data += '</tr>';
  data += '</tbody>';
  data += '</table>';
  document.getElementById("cartDisplay").innerHTML = data;
}

function addCartFunction(index, sp) {
  let image = products[index][sp].image;
  let title = products[index][sp].title;
  let price = products[index][sp].price;
  let infor = products[index][sp].infor;
  let cart = new Cart(image, title, price, infor);
  Carts.push(cart);
  document.getElementById("cart-add").innerHTML = Carts.length
}

window.onload = drawTable()

// function likeFunction() {
//   loveCartCount = document.getElementById("cart-love");

//   carLove.innerHTML = countLove;
// }
