const productButton = document.getElementById("index-button");

productButton.addEventListener("click", () => {
  const productTitle = document.getElementById("product-title").value;
  const productPrice = document.getElementById("product-price").value;
  const productImage = document.getElementById("product-image").value;
  const productDescription = document.getElementById(
    "product-description"
  ).value;
  const productLocation = document.getElementById("product-location").value;

  const products = {
    title: productTitle,
    price: productPrice,
    url_img: productImage,
    description: productDescription,
    location: productLocation,
  };

  console.log("spaudziu", products);
});
