class Product {
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
let product1 = new Product(
  "./img/new-product/1.jpg",
  "[Zoku Kono Subarashii Sekai Ni Bakuen Wo!] <span>Iris: Light Novel Band of Thieves</span>",
  "$194.49",
  "hang noi dia TQ"
);
let product2 = new Product(
  "./img/new-product/new-2.jpg",
  "[New Prince of Tennis] <span>Big Anizukin Plush / Kunimitsu Tezuka - Character Goods</span>",
  "$66.99"
);
let product3 = new Product(
  "./img/new-product/new-3.jpg",
  "[Tokyo Revengers] <span>Big Anizukin Plush / Chifuyu Matsuno - Character Goods</span>",
  "$104.99"
);
let product4 = new Product(
  "./img/new-product/new-4.jpg",
  " Slayer: Kimetsu no Yaiba] <span>Figma Tanjiro Kamado DX Edition – figma.</span>",
  "$104.99"
);
let product5 = new Product(
  "./img/new-product/new-5.jpg",
  " [Jujutsu Kaisen] <span>Steel Watch / Suguru Geto - Character Goods</span>",
  "$59.99"
);
let product6 = new Product(
  "./img/new-product/new-6.jpg",
  "[Kono Subarashii Sekai Ni Sakuen wo!] <span> CAworks Megumin: Anime Opening Edition  (Additional parts)</span>",
  "$257.99"
);
let product7 = new Product(
  "./img/new-product/new-7.jpg",
  "[Hatsune Miku x Pusheen Collaboration] <span>Flat Pouch type A - Character Goods</span>",
  "S$194.49"
);
let product8 = new Product(
  "./img/new-product/new-8.jpg",
  "[Zoku Kono Subarashii Sekai Ni Bakuen Wo!] <span>Iris: Light Novel Band of Thieves</span>",
  "$19.99"
);
let product9 = new Product(
  "./img/new-product/new-9.jpg",
  " [Hatsune Miku x Pusheen Collaboration] <span>Can Badge Set (3) - Character Goods</span>",
  "$16.99"
);
let product10 = new Product(
  "./img/new-product/new-10.jpg",
  "[Hatsune Miku x Pusheen Collaboration] <span>Acrylic Stand - Character Goods</span>",
  "$19.99"
);
let newArrival = [
  "New Arrival",
  product1,
  product2,
  product5,
  product6,
  product7,
  product8,
  product9,
  product4,
];
let exclusiveItems = [
  "Exclusive Items",
  product10,
  product9,
  product7,
  product6,
  product5,
  product3,
  product2,
  product1,
];
let products = [newArrival, exclusiveItems];
function productsDisplay() {
  let data = "";
  for (let j = 0; j < products.length; j++) {
    data += '<div class="product mb-5 d-flex flex-column">';
    data += '<div class="product-heading d-flex justify-content-between">';
    data +=
      '<h3><span class="fw-bold fs-2" style="color: #ff5dab;">|</span>' +
      products[j][0] +
      "</h3>";
    data +=
      '<p class="me-2 align-self-center "><a class=" " href="#">See more...</a> </p>';
    data += " </div>";
    data += ' <div class="product-list d-flex" id="new-arrival">';
    for (let i = 1; i < products[j].length; i++) {
      data += '<div class="product-item">';
      data += '<a target="_blank" href="./miku.html">';
      data +=
        '<img class="product-img w-100" src="' +
        products[j][i].image +
        '" alt="image">';
      data += '<div class="product-content px-1">';
      data +=
        '<p class="title" title="' +
        products[j][i].title +
        '">' +
        products[j][i].title +
        "</p>";
      data +=
        '<p style="color: black; font-size: 15px;" class="py-2 fw-bold money price">' +
        products[j][i].price +
        "</p>";
      data += "</div>";
      data += "</a>";
      data += '<div class="product-bottom">';
      data +=
        '<button  class="add" onclick="addCartFunction(' +
        [j] +
        "," +
        [i] +
        ')"> <i class="fa-solid fa-cart-shopping"></i>Add </button>';
      data +=
        '<button  class="delete" style="display:none ;"  onclick="deleteFunction(' +
        [j] +
        "," +
        [i] +
        ')">Delete </button>';
      data +=
        '<button class="like" onclick="likeFunction(' +
        [j] +
        "," +
        [i] +
        ')"> <i class="fas fa-heart"></i>Like </button>';

      data += "</div>";
      data += "</div>";
    }
    data += "</div>";
    data += "</div>";
  }
  document.getElementById("product-display").innerHTML = data;
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

function addProducts() {
  //  let changeBox =  document.createElement("div")
  //  changeBox.innerText("Add product box")
  //  document.body.appendChild(changeBox)
  document.getElementById("add-product").style.display = "flex";
  
}
function closeFunction(){
  document.getElementById("add-product").style.display = "none";
}
let productType
function addFunction(){
  let image = document.getElementById("image").value;
  let title = document.getElementById("title").value;
  let price = document.getElementById("price").value;
  let infor = document.getElementById("infor").value;
  productType =document.getElementById("product-type").value;
  let product = new Product(image, title, price, infor)
  products[productType].push(product);
  console.log(products[productType][products[productType].length-1]);
  productsDisplay();
  reset();
}

function reset() {
  document.getElementById("image").value = "";
  document.getElementById("title").value = "";
  document.getElementById("price").value = "";
  document.getElementById("infor").value = "";
}
// delete function
function deleteFunction(index, sp) {
  if (confirm("Bạn có muốn xóa san phẩm" + "?")) {
    console.log(index);
    console.log(sp);
    products[index].splice(sp, 1);
  }
  productsDisplay();
  editProducts();

}

function recover(){
  productsDisplay()
}