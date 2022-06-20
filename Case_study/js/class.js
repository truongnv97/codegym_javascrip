
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


