function checkAdmin() {
  let username = localStorage.getItem("username");
  let data = "";
  if (username === null) {
    data += '<a class="nav-link"  href="./login.html">LOGIN</a>';
    document.getElementById("loginId").innerHTML = data;
    return true;
  } else {
    data +=
      '<a class="nav-link" >' +
      username +
      "</a>" +
      '<a onclick="logout()" href="./main.html">Đăng xuất</a>';
    document.getElementById("loginId").innerHTML = data;
    document.getElementById("page-fix").style.display = "block";
    return false;
  }
}

function logout() {
  localStorage.clear();
}

function productsDisplay() {
  let cartData = "";
  for (let j = 0; j < products.length; j++) {
    cartData += '<div class="product mb-5 d-flex flex-column">';
    cartData += '<div class="product-heading d-flex justify-content-between">';
    cartData +=
      '<h3><span class="fw-bold fs-2" style="color: #ff5dab;">|</span>' +
      products[j][0] +
      "</h3>";
    cartData +=
      '<p class="me-2 align-self-center "><a class=" " href="#">See more...</a> </p>';
    cartData += " </div>";
    cartData += ' <div class="product-list d-flex" id="new-arrival">';
    for (let i = 1; i < products[j].length; i++) {
      cartData += '<div class="product-item">';
      cartData += '<a target="_blank" href="./miku.html">';
      cartData +=
        '<img class="product-img w-100" src="' +
        products[j][i].image +
        '" alt="image">';
      cartData += '<div class="product-content px-1">';
      cartData +=
        '<p class="title" title="' +
        products[j][i].title +
        '">' +
        products[j][i].title +
        "</p>";
      cartData +=
        '<p style="color: black; font-size: 15px;" class="py-2 fw-bold money price">' +
        products[j][i].price +
        "</p>";
      cartData += "</div>";
      cartData += "</a>";
      cartData += '<div class="product-bottom">';
      cartData +=
        '<button  class="add" onclick="addCartFunction(' +
        [j] +
        "," +
        [i] +
        ')"> <i class="fa-solid fa-cart-shopping"></i>Add </button>';
      cartData +=
        '<button  class="delete" style="display:none ;"  onclick="deleteFunction(' +
        [j] +
        "," +
        [i] +
        ')">Delete </button>';
      cartData +=
        '<button class="like" onclick="likeFunction(' +
        [j] +
        "," +
        [i] +
        ')"> <i class="fas fa-heart"></i>Like </button>';

      cartData += "</div>";
      cartData += "</div>";
    }
    cartData += "</div>";
    cartData += "</div>";
  }
  document.getElementById("product-display").innerHTML = cartData;
}
productsDisplay();

//edit product
function editProducts() {
  const delBtns = document.querySelectorAll(".delete");
  for (const delBtn of delBtns) {
    delBtn.style.display = "block";
  }
  const addBtns = document.querySelectorAll(".add");
  for (const addBtn of addBtns) {
    addBtn.innerText = "Edit";
    addBtn.setAttribute("onclick", "editProduct()");
  }

  const likeBtns = document.querySelectorAll(".like");
  for (const likeBtn of likeBtns) {
    likeBtn.innerText = "Save";
    likeBtn.setAttribute("onclick", "saveProductChanged()");
  }
}

// hiển thị bảng thêm sản phẩm
function addProducts() {
  document.getElementById("add-product").style.display = "flex";
}
function closeFunction() {
  document.getElementById("add-product").style.display = "none";
}

// thêm product
let productType;
function addFunction() {
  let image = document.getElementById("image").value;
  let title = document.getElementById("title").value;
  let price = document.getElementById("price").value;
  let infor = document.getElementById("infor").value;
  productType = document.getElementById("product-type").value;
  let product = new Product(image, title, price, infor);
  products[productType].push(product);
  productsDisplay();
  // editProducts()
  reset();
}

// reset cho input của bảng
function reset() {
  document.getElementById("image").value = "";
  document.getElementById("title").value = "";
  document.getElementById("price").value = "";
  document.getElementById("infor").value = "";
}
// delete function
let index;
let sp;
function deleteFunction(index, sp) {
  if (confirm("Bạn có muốn xóa san phẩm" + "?")) {
    console.log(index);
    console.log(sp);
    products[index].splice(sp, 1);
  }
  productsDisplay();
  editProducts();
}
// trở về màn hình viewer
function recover() {
  productsDisplay();
}

var Carts = [];
function addCartFunction(index, sp) {
  let image = products[index][sp].image;
  let title = products[index][sp].title;
  let price = products[index][sp].price;
  let infor = products[index][sp].infor;
  let cart = new Cart(image, title, price, infor);
  document.getElementById("cart-add").innerHTML = Carts.length + 1;
  Carts.push(cart);
  cartList= ""
  cartListDisplay()
  // drawTable()
}

let cartList = ""
function cartListDisplay() {
  for (let i =0; i < Carts.length; i++) {
    cartList +='<div class="d-flex flex-row cart-list-item">';
    cartList += '<div class="">';
    cartList += '<img src="' + Carts[i].image + '" alt="">';
    console.log(Carts[i].image);
    cartList += "</div>";
    cartList +=
    '<p class="title">' + Carts[i].title + '</p>';
    cartList +=
    '<p style="color: red; font-size: 14px;" class="pe-3 fw-bold money">' + Carts[i].price + '</p>';
    cartList+='</div>'
  }
  cartList+='<button class="cart-button"><a href="./cart.html" target="_blank" >Xem giỏ hàng </a></button>'
  document.getElementById("cart-list-display").innerHTML = cartList;
}


function drawTable() {
  let data = "";
  data += "<table><tbody>";
  data += '<tr class="line">';
  data += ' <th class="product-col py-3" colspan="3">Product</th>';
  data += '  <th class="price-col text-center">Price</th>';
  data += ' <th class="quantity-col text-center">Quantity</th>';
  data += '  <th class="total-col text-end">Total</th>';
  data += "</tr>";

  for (let i = 0; i < Carts.length; i++) {
    data += ' <tr class="product-row text-center" >';
    data += '<td class="check-col"><input type="checkbox" checked></td>';
    data += ' <td class="img-col"><img src="' + Carts[i].image + '"></td>';
    data += '<td class="content-col text-start">';
    data += "<div><p>" + Carts[i].title + "</p>";
    data += "<div><p><b>Category: </b>Figures</p>";
    data +=
      " <p><b>Vendor: </b>USA Animate Online Shop</p> <p><b>Weight: </b>3.22 lb</p></div></div>";
    data += " <button  >Remove</button>";
    data += " </td>";
    data += '<td class="price-col">';
    data +=
      '<p style="color: red; font-size: 16px;" class="py-2 fw-bold money">' +
      Carts[i].price +
      "</p> </td>";
    data += '<td class="quantity-col">';
    data += ' <div class="input-group">';

    data += "<button>-</button>";
    data += '  <input class="_2rGMck _8rdz59" type="text" value="2">';
    data += "<button>+</button>";
    data += " </div>";
    data += "</td>";
    data += ' <td class="total-col text-end">';
    data +=
      '  <p style="color: red; font-size: 16px;" class=" fw-bold money">' +
      2 * Carts[i].price +
      "</p>";
    data += "</td>";
    data += "</tr>";
  }
  data += ' <tr class="product-row product-sum">';
  data += ' <td class="check-col"><input type="checkbox" checked ></td>';
  data +=
    ' <td colspan="4" style="font-size: 20px;padding-left: 16px;">Total</td>';
  data += '<td class="text-end">';
  data +=
    '<p style="color: red; font-size: 16px;" class=" fw-bold money">$694.49 </p> </td>';
  data += "</tr><tr >";
  data += "<td></td>";
  data += '<td colspan="5" class="pt-3 pb-1 ps-3">';
  data += " <p>Add a note to your order</p>";
  data +=
    '  <textarea name="" style="width: 100%; height: 150px;" ></textarea>';
  data +=
    '<p style="background-color: #fff5c3;"class=" p-2 my-2">Animate usa online shop process all orders in USD. Shipping & taxes calculated at checkout.</p>';
  data += "</td></tr>";
  data += '<tr class="checkout">';
  data += " <td></td>";
  data += ' <td colspan="5" class=" pb-2 pt-2 ps-3" >';
  data += ' <div class="d-flex justify-content-between">';
  data += '<button type="">Continue Shopping</button>';
  data += "<button>Proceed To Checkout</button>";
  data += "</div>";
  data += "</td>";
  data += "</tr>";
  data += "</tbody>";
  data += "</table>";

  document.getElementById("cartDisplay").innerHTML = data;
}


window.onload = drawTable();

// function likeFunction() {
//   loveCartCount = document.getElementById("cart-love");

//   carLove.innerHTML = countLove;
// }


