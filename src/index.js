/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const baseUrl = "https://platzi-avo.vercel.app";

const appNode = document.querySelector("#app");
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
      imagen.className = " h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6";
      imagen.src = `${baseUrl}${item.image}
      `;
     
     
      //crear un title
      const title = document.createElement("h2");

      title.textContent = item.name;
      title.className = "text-lg "; //crear un precio
      const price = document.createElement("div");
      price.className = "text-gray-600 mt-10 "
      price.textContent = item.price;
       
      const container = document.createElement("div");
      container.className = 'w-2/3 flex flex-col bg-green-900 hover:bg-green-700'
      container.append(imagen, title, price);
      todosLosItems.push(container);
    });
    appNode.append(...todosLosItems);
  });
