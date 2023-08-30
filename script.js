const productWrapper = document.getElementById("product");

const getProduct = async () => {
  const response = await fetch(
    "https://64ed83091f87218271415468.mockapi.io/product"
  );
  const data = await response.json();
  console.log("data", data);

  data.forEach((product) => {
    const container = document.createElement("a");
    container.setAttribute("class", "products-container");
    container.href = "./productPage.html";

    container.addEventListener("click", () => {
      localStorage.setItem("productId", product.id);
    });

    const image = document.createElement("img");
    image.setAttribute("src", product.img_url);
    image.src = product.img_url;
    container.appendChild(image);

    const title = document.createElement("h1");
    title.innerHTML = product.title;
    container.appendChild(title);

    const price = document.createElement("p");
    price.innerHTML = product.price;
    container.appendChild(price);

    productWrapper.append(container);
  });
};
getProduct();
