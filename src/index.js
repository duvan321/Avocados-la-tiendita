/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector("#app");

  

const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price)
  return newPrice ;
};
// web
//conectarnos al servidor
window
  .fetch(`${baseUrl}/api/avo`)

  //procesar la respuesta y convertirla em json
  .then((respuesta) => respuesta.json())
  //Json -> Data Renderizar info browser
  .then((responseJson) => {
    const todosLosItems = [];
    responseJson.data.forEach((item) => {
      //crear una imagen
      
      const imagen = document.createElement("img");
      imagen.className = "imagen";
      imagen.src = `${baseUrl}${item.image}
      `;

      

      
      
      //crear un title
      const title = document.createElement("h2");

      title.textContent = item.name;
      title.className = "title "; //crear un precio
      const price = document.createElement("div");
      price.className = "price ";
      price.textContent = formatPrice(item.price);

      const container = document.createElement("div");
      container.className = "container-items";
     
      container.append(imagen, title, price);
      todosLosItems.push(container);
    });
    appNode.append(...todosLosItems);
  });
