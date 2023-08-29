const productWrapper = document.getElementById("product");

const getProducts = async () => {
  const response = await fetch(
    "https://64ed83091f87218271415468.mockapi.io/product"
  );
  const data = await response.json();
  console.log("data", data);

  data.forEach((product) => {
    const container = document.createElement("a");
    container.setAttribute("class", "products-container");
    container.href = "#";

    const title = document.createElement("h1");
    title.innerHTML = product.title;
    container.append(title);

    const image = document.createElement("img");
    image.setAttribute("class", "product-image");
    image.src = product.img_url;

    image.append(img_url);

    const price = document.createElement("p");
    price.innerHTML = product.price;
    image.append(price);

    productWrapper.append(container);
  });
};
getProducts();
