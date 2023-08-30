const productId = localStorage.getItem("productId");
const deleteButton = document.getElementById("deleteButton");

const productsAddedToPage = (product) => {
  const title = document.getElementById("title");
  title.innerHTML = product.title;

  const price = document.getElementById("price");
  price.innerHTML = product.price;

  const location = document.getElementById("location");
  location.innerHTML = product.location;

  const description = document.getElementById("description");
  description.innerHTML = product.description;

  const productPageImage = document.getElementById("productPageImage");
  productPageImage.src = product.productPageImage;
};

const getProduct = async () => {
  const response = await fetch(
    "https://64ed83091f87218271415468.mockapi.io/product/" + productId
  );
  const product = await response.json();

  productsAddedToPage(product);
};

getProduct();

deleteButton.addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://64ed83091f87218271415468.mockapi.io/product/" + productId,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (data) {
      const deleteMessage = document.getElementById("messageInfo");
      deleteMessage.innerHTML = "produktas istrintas";

      setTimeout(() => {
        window.location.replace("./index.html");
      }, 2000);
    }
  } catch (err) {
    const deleteMessage = document.getElementById("messageInfo");
    deleteMessage.innerHTML = "ivyko klaida";
  }
});
