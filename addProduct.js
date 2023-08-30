const productButton = document.getElementById("index-button");

productButton.addEventListener("click", async () => {
  const productTitle = document.getElementById("product-title").value;
  const productPrice = document.getElementById("product-price").value;
  const productImage = document.getElementById("product-image").value;
  const productDescription = document.getElementById(
    "product-description"
  ).value;
  const productLocation = document.getElementById("product-location").value;

  if (
    !productTitle ||
    isNaN(productPrice) ||
    productPrice <= 0 ||
    !productImage ||
    !productDescription ||
    !productLocation
  ) {
    const messageWrapper = document.getElementById("message");
    messageWrapper.innerHTML = "neuzpildyti visi laukeliai";
    return;
  }

  const products = {
    title: productTitle,
    price: productPrice,
    img_url: productImage,
    description: productDescription,
    location: productLocation,
  };

  try {
    const response = await fetch(
      "https://64ed83091f87218271415468.mockapi.io/product",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
      }
    );
    const data = await response.json();

    if (data) {
      const messageWrapper = document.getElementById("message");
      messageWrapper.innerHTML = "Productas idetas";

      setTimeout(() => {
        window.location.replace("./index.html");
      }, 1500);
      clearInput();
    }
  } catch (err) {
    const messageWrapper = document.getElementById("message");
    messageWrapper.innerHTML = "Nepavyko ideti producto";
  }
});

const clearInput = () => {
  document.getElementById("product-title").value = "";
  document.getElementById("product-price").value = "";
  document.getElementById("product-image").value = "";
  document.getElementById("product-description").value = "";
  document.getElementById("product-location").value = "";
};
