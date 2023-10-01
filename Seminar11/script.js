const products = JSON.parse(data);

const renderProducts = (products) => {
  const container = document.querySelector(".product-box__content");

  products.forEach((productItem) => {
    const product = document.createElement("div");
    product.classList.add("product");
    const img = document.createElement("img");
    img.classList.add("product__img");
    img.setAttribute("src", productItem.image);
    const productContent = document.createElement("div");
    productContent.classList.add("product__content");
    const link = document.createElement("a");
    link.setAttribute("href", "product.html");
    link.classList.add("product__heading");
    link.textContent = productItem.title;
    const description = document.createElement("p");
    description.classList.add("product__text");
    description.textContent = productItem.description;
    const price = document.createElement("p");
    price.classList.add("product__price");
    price.textContent = productItem.price;
    productContent.append(link, description, price);
    product.append(img, productContent);
    container.append(product);
  });
};

renderProducts(products);
