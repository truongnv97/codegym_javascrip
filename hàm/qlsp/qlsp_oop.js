class Product {
  name;
  price;
  brand;
  descrip;
  constructor(name, price, brand, descrip) {
    this.name = name;
    this.price = price;
    this.brand = brand;
    this.descrip = descrip;
  }
}
let product1 = new Product("ahihi", 100, "sony", "dep");
let product2 = new Product("ahihii", 1000, "sonyy", "depp");
let product3 = new Product("ahihiii", 10000, "sonyyy", "deppp");
let product4 = new Product("ahihiii", 100000, "sonyyyy", "depppp");
let products = [product1, product2, product3, product4];

function render() {
  let data = "<table>";
  data +=
    "<tr><td style='text-align: center;'><b>STT</b></td><td><b>Product name</b></td><td>Price</td><td>Brand</td><td>Description</td><td></td><td id='red'>" +
    products.length +
    " Products" +
    "</td></tr>";
  for (let i = 0; i < products.length; i++) {
    data += "<tr>";
    data += "<td style='text-align: center;'>" + (i + 1) + "</td>";
    data += "<td>" + products[i].name + "</td>";
    data += "<td>" + products[i].price + "</td>";
    data += "<td>" + products[i].brand + "</td>";
    data += "<td>" + products[i].descrip + "</td>";
    data += "<td><button onclick='editProduct(" + i + ")'>Edit</button></td>";
    data +=
      "<td><button onclick='deleteProduct(" + i + ")'>Delete</button></td>";
    data += "</tr>";
  }
  data += "</table>";
  document.getElementById("productDisplay").innerHTML = data;
}

function deleteProduct(index) {
  if (confirm("Bạn có muốn xóa san phẩm có tên: " + products[index] + "?")) {
    products.splice(index, 1);
  }
  render();
}

let indexEdit;
function editProduct(index) {
  indexEdit = index;
  document.getElementById("title").innerHTML = "Edit product";
  document.getElementById("add").innerHTML = "Edit";
  document.getElementById("product").value = products[index].name;
  document.getElementById("price").value = products[index].price;
  document.getElementById("brand").value = products[index].brand;
  document.getElementById("descrip").value = products[index].descrip;
  document
    .getElementById("add")
    .setAttribute("onclick", "changeValueProductEdit()");
}

function changeValueProductEdit() {
  let name = document.getElementById("product").value;
  let price = document.getElementById("price").value;
  let brand = document.getElementById("brand").value;
  let description = document.getElementById("descrip").value;
  document.getElementById("title").innerHTML = "Add new product";
  document.getElementById("add").innerHTML = "Add";
  document.getElementById("add").setAttribute("onclick", "addProduct()");
  let product = new Product(name, price, brand, description);
  products[indexEdit] = product;
  reset()
  render();
}

function addProduct() {
  let name = document.getElementById("product").value;
  let price = document.getElementById("price").value;
  let brand = document.getElementById("brand").value;
  let description = document.getElementById("descrip").value;
  let product = new Product(name, price, brand, description);
  products.push(product);
  reset()
  render();
}
function reset() {
  document.getElementById("product").value = "";
  price = document.getElementById("price").value = "";
  brand = document.getElementById("brand").value = "";
  description = document.getElementById("descrip").value = "";
}

render();
