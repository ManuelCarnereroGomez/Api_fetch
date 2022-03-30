window.onload = function () {
  let apiKey = 'zcYlBOk1kt39rY6vageX5NiUmi8utBi6'; //añade aquí tu apikey
  let query = "gatete"; //lo que quieras buscar
  let limit = '35'; // el número de resultados que necesitas
  let resource = 'gifs'; //gifs - stickers

  let caja = document.getElementById("content");
  let go = document.getElementById("go");

  go.addEventListener("click", () => {
    query = document.getElementById("buscar").value;
    getData();
  });

  getData();

  function getData() {
    caja.innerHTML = "";
    fetch(`https://api.giphy.com/v1/${resource}/search?api_key=${apiKey}&q=${query}&limit=${limit}&offset=0&rating=g&lang=en`)
      .then(data => {
        return data.json();
      })
      .then(data => {
        console.log(data.data);


        data.data.forEach(function (cat, index) {
          let item = `<div><h2>${cat.title}</h2>
          <img src="${cat.images.original.url}" alt="${cat.title}">
        </div>`;
          caja.innerHTML += item;
        });
      })
  }
}





// window.onload = function () {

//   let success = (posicion) => {
//     let lat = posicion.coords.latitude;
//     let long = posicion.coords.longitude;
//     let altitud = posicion.coords.altitude;
  
//     alert('tu latitud es:' + lat + ' tu latitud es ' + long);
//   }

// };
