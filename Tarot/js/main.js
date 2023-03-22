//CARTAS: https://www.freepik.es/search?author=28227411&authorSlug=user28227411&format=author&query=tarot
let jugador1 = document.getElementById("jugador1");
let jugador2 = document.getElementById("jugador2");
let tirarCartas = document.getElementById("tirarCartas");
let queCarta = document.getElementById("queCarta");

//secciones
let carga = document.getElementById("carga");
let animacion = document.getElementById("animacion");
let carrusel = document.getElementById("carrusel");
let match = document.getElementById("match");
let listado = document.getElementById("listado");

//listado
let listadoCard = document.getElementById("listadoCard");

//CAROUSEL
let contCarrusel = document.getElementById("contCarrusel");
let carouselInner = document.getElementById("carousel-inner");
let myCarousel = document.getElementById("carouselCartas");

//Botones
let volverTirar = document.getElementById("volverTirar");
let verResultado = document.getElementById("verResultado");
let btnSalir = document.getElementById("btnSalir");
let btnGuardar = document.getElementById("btnGuardar");

//Match
let resumenCartas = document.getElementById("resumenCartas");

function validacion() {
  if (jugador1.classList.contains("is-invalid")) {
    jugador1.classList.remove("is-invalid");
    validacionJ1.classList.add("d-none");
    validacionJ1.classList.remove("d-block");
  } else {
    jugador1.classList.add("is-invalid");
    validacionJ1.classList.remove("d-none");
    validacionJ1.classList.add("d-block");
  }

  if (jugador2.classList.contains("is-invalid")) {
    jugador2.classList.remove("is-invalid");
    validacionJ2.classList.add("d-none");
    validacionJ2.classList.remove("d-block");
  } else {
    jugador2.classList.add("is-invalid");
    validacionJ2.classList.remove("d-none");
    validacionJ2.classList.add("d-block");
  }
}

let pantallas = [carga, animacion, carrusel, match];

let cambiarPantalla = (p) => {
  pantallas.forEach((pantalla) => {
    pantalla.classList.add("d-none");
    p.classList.remove("d-none");
  });
  console.log("pantalla activa: " + p.id);
};

cambiarPantalla(carga);

let cartasJugador1 = [];
let cartasJugador2 = [];

function repartir() {
  cartasJugador1 = [];
  cartasJugador2 = [];
  for (var i = 0; i < 22; i++) {
    function getRandomItem(arr) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      const item = arr[randomIndex];
      return item;
    }
    const result = getRandomItem(cartas);

    if (!cartasJugador1.includes(result) && !cartasJugador2.includes(result)) {
      if (cartasJugador1.length < 3) {
        cartasJugador1.push(result);
      } else if (cartasJugador2.length < 3) {
        cartasJugador2.push(result);
      }
    }
  }
  console.log(
    `cartas de ${jugador1.value}: (${cartasJugador1.length}) ${cartasJugador1[0].nombre}, ${cartasJugador1[1].nombre}, ${cartasJugador1[2].nombre}`
  );
  console.log(
    `cartas de ${jugador2.value}: (${cartasJugador2.length}) ${cartasJugador2[0].nombre}, ${cartasJugador2[1].nombre}, ${cartasJugador2[2].nombre}`
  );
  queCarta.innerHTML = `Carta 1/3 de ${jugador1.value}`;
}

function blanquearCarga() {
  jugador1.value = "";
  jugador2.value = "";
  if (jugador1.classList.contains("is-invalid")) {
    jugador1.classList.remove("is-invalid");
    validacionJ1.classList.add("d-none");
    validacionJ1.classList.remove("d-block");
    jugador2.classList.remove("is-invalid");
    validacionJ2.classList.add("d-none");
    validacionJ2.classList.remove("d-block");
  }
}

function titListado() {
  let tituloListado = `
  <hr>
                <p>Partidas guardadas</p>
  `;
  listado.innerHTML = tituloListado;
}

tirarCartas.addEventListener("click", () => {
  if (jugador1.value != "" && jugador2.value != "") {
    repartir();
    cambiarPantalla(animacion);
    setTimeout(() => {
      cambiarPantalla(carrusel);
    }, 1000);

    let modeloCarta = `
    <div class="carousel-item active" data-id="1">
    <img src="${cartasJugador1[0].imagen}" class="d-block" alt="...">
    <div class="corousel-desc">
        <h5>${cartasJugador1[0].nombre}</h5>
        <p>${cartasJugador1[0].descripcion}</p>
    </div>
    </div>
    <div class="carousel-item" data-id="2">
    <img src="${cartasJugador1[1].imagen}" class="d-block" alt="...">
    <div class="corousel-desc">
        <h5>${cartasJugador1[1].nombre}</h5>
        <p>${cartasJugador1[1].descripcion}</p>
    </div>
    </div>
    <div class="carousel-item" data-id="3">
    <img src="${cartasJugador1[2].imagen}" class="d-block" alt="...">
    <div class="corousel-desc">
        <h5>${cartasJugador1[2].nombre}</h5>
        <p>${cartasJugador1[2].descripcion}</p>
    </div>
    </div>
    <div class="carousel-item" data-id="4">
    <img src="${cartasJugador2[0].imagen}" class="d-block" alt="...">
    <div class="corousel-desc">
        <h5>${cartasJugador2[0].nombre}</h5>
        <p>${cartasJugador2[0].descripcion}</p>
    </div>
    </div>
    <div class="carousel-item" data-id="5">
    <img src="${cartasJugador2[1].imagen}" class="d-block" alt="...">
    <div class="corousel-desc">
        <h5>${cartasJugador2[1].nombre}</h5>
        <p>${cartasJugador2[1].descripcion}</p>
    </div>
    </div>
    <div class="carousel-item" data-id="6">
    <img src="${cartasJugador2[2].imagen}" class="d-block" alt="...">
    <div class="corousel-desc">
        <h5>${cartasJugador2[2].nombre}</h5>
        <p>${cartasJugador2[2].descripcion}</p>
    </div>
    </div>
    `;

    function escribirCarrusel() {
      carouselInner.innerHTML = modeloCarta;
      queCarta.innerHTML = `Carta 1/3 de ${jugador1.value}`;
    }

    escribirCarrusel();
  } else {
    validacion();
  }
});

//Numeracion cartas
myCarousel.addEventListener("slide.bs.carousel", (event) => {
  let elem = event.relatedTarget.getAttribute("data-id");

  switch (elem) {
    case "1":
      queCarta.innerHTML = `Carta 1/3 de ${jugador1.value}`;
      break;
    case "2":
      queCarta.innerHTML = `Carta 2/3 de ${jugador1.value}`;
      break;
    case "3":
      queCarta.innerHTML = `Carta 3/3 de ${jugador1.value}`;
      break;
    case "4":
      queCarta.innerHTML = `Carta 1/3 de ${jugador2.value}`;
      break;
    case "5":
      queCarta.innerHTML = `Carta 2/3 de ${jugador2.value}`;
      break;
    case "6":
      queCarta.innerHTML = `Carta 3/3 de ${jugador2.value}`;
      break;
  }
});

let matchearon = "";

verResultado.addEventListener("click", () => {
  let valorJugador1 =
    cartasJugador1[0].valor + cartasJugador1[1].valor + cartasJugador1[2].valor;
  let valorJugador2 =
    cartasJugador2[0].valor + cartasJugador2[1].valor + cartasJugador2[2].valor;

  console.log("valor jugador 1: " + valorJugador1);
  console.log("valor jugador 2: " + valorJugador2);

  if (
    (valorJugador1 < 0 && valorJugador2 < 0) ||
    (valorJugador1 > 0 && valorJugador2 > 0)
  ) {
    resultado.innerHTML = `<img src="img/match_si.svg" alt=""></img>`;
    matchearon = "Si";
  } else {
    resultado.innerHTML = `<img src="img/match_no.svg" alt=""></img>`;
    matchearon = "No";
  }

  var modeloResumen = `
            <div class="row resumen">
                <h3>${jugador1.value}</h3>
                <div class="col"><img src="${cartasJugador1[0].imagen}" alt="${cartasJugador1[0].nombre}"></div>
                <div class="col"><img src="${cartasJugador1[1].imagen}" alt="${cartasJugador1[1].nombre}"></div>
                <div class="col"><img src="${cartasJugador1[2].imagen}" alt="${cartasJugador1[2].nombre}"></div>
            </div>
            <div class="row resumen">
                <h3>${jugador2.value}</h3>
                <div class="col"><img src="${cartasJugador2[0].imagen}" alt="${cartasJugador2[0].nombre}"></div>
                <div class="col"><img src="${cartasJugador2[1].imagen}" alt="${cartasJugador2[1].nombre}"></div>
                <div class="col"><img src="${cartasJugador2[2].imagen}" alt="${cartasJugador2[2].nombre}"></div>
            </div>
`;

  resumenCartas.innerHTML = modeloResumen;

  cambiarPantalla(match);
});

volverTirar.addEventListener("click", () => {
  repartir();
  cambiarPantalla(animacion);

  let modeloCarta = `
  <div class="carousel-item active" data-id="1">
  <img src="${cartasJugador1[0].imagen}" class="d-block" alt="...">
  <div class="corousel-desc">
      <h5>${cartasJugador1[0].nombre}</h5>
      <p>${cartasJugador1[0].descripcion}</p>
  </div>
  </div>
  <div class="carousel-item" data-id="2">
  <img src="${cartasJugador1[1].imagen}" class="d-block" alt="...">
  <div class="corousel-desc">
      <h5>${cartasJugador1[1].nombre}</h5>
      <p>${cartasJugador1[1].descripcion}</p>
  </div>
  </div>
  <div class="carousel-item" data-id="3">
  <img src="${cartasJugador1[2].imagen}" class="d-block" alt="...">
  <div class="corousel-desc">
      <h5>${cartasJugador1[2].nombre}</h5>
      <p>${cartasJugador1[2].descripcion}</p>
  </div>
  </div>
  <div class="carousel-item" data-id="4">
  <img src="${cartasJugador2[0].imagen}" class="d-block" alt="...">
  <div class="corousel-desc">
      <h5>${cartasJugador2[0].nombre}</h5>
      <p>${cartasJugador2[0].descripcion}</p>
  </div>
  </div>
  <div class="carousel-item" data-id="5">
  <img src="${cartasJugador2[1].imagen}" class="d-block" alt="...">
  <div class="corousel-desc">
      <h5>${cartasJugador2[1].nombre}</h5>
      <p>${cartasJugador2[1].descripcion}</p>
  </div>
  </div>
  <div class="carousel-item" data-id="6">
  <img src="${cartasJugador2[2].imagen}" class="d-block" alt="...">
  <div class="corousel-desc">
      <h5>${cartasJugador2[2].nombre}</h5>
      <p>${cartasJugador2[2].descripcion}</p>
  </div>
  </div>
  `;

  function escribirCarrusel() {
    carouselInner.innerHTML = modeloCarta;
  }

  escribirCarrusel();
  setTimeout(() => {
    cambiarPantalla(carrusel);
  }, 1000);
});

btnSalir.addEventListener("click", () => {
  cambiarPantalla(carga);
  jugador1.value = "";
  jugador2.value = "";
});

btnGuardar.addEventListener("click", () => {
  datosPartida = [];
  datosPartida.push(jugador1.value);
  datosPartida.push(jugador2.value);
  datosPartida.push(cartasJugador1, cartasJugador2);
  datosPartida.push(matchearon);

  guardarLocalStorage(datosPartida);

  cambiarPantalla(animacion);

  setTimeout(() => {
    cambiarPantalla(carga);
    location.reload();

    blanquearCarga();
  }, 1000);
});

function guardarLocalStorage(datosPartida) {
  let datosPartidaArray =
    JSON.parse(localStorage.getItem("partidasGuardadas")) || [];

  datosPartidaArray.push(datosPartida);

  let datosPartidaArrayJSON = JSON.stringify(datosPartidaArray);

  localStorage.setItem("partidasGuardadas", datosPartidaArrayJSON);
}

let datosPartidaArrayObj = localStorage.getItem("partidasGuardadas") || [];

if (localStorage.getItem("partidasGuardadas")) {
  let datosPartidaArrayJSON = JSON.parse(datosPartidaArrayObj);
  titListado();

  datosPartidaArrayJSON.forEach((partida) => {
    let modeloPartidas = `
    <div id="listadoCard" class="card match${partida[4]}">
    <div class="card-body">
    <div class="row align-items-center">
    <div class="col-10">
    <p>${partida[0]} & ${partida[1]}</p>
    </div>
    <div class="col-2"><i class="fa-solid fa-eye" onclick="verResumen()"></i></div>
    </div>
    </div>
    </div>
    `;

    listado.innerHTML += modeloPartidas;
  });
} else {
  console.log("no existe objeto en localstorage");
}

//-volver a cargar resumen--------------------------------------------
function verResumen(partida) {
  console.log("no pude recuperar para mostrar el resumen de la partida");
  if (partida[4] == "Si") {
    resultado.innerHTML = `<img src="img/match_si.svg" alt=""></img>`;
  } else {
    resultado.innerHTML = `<img src="img/match_no.svg" alt=""></img>`;
  }

  var modeloResumen = `
            <div class="row resumen">
                <h3>${partida[0]}</h3>
                <div class="col"><img src="${partida[2][0].imagen}" alt="${partida[2][0].nombre}"></div>
                <div class="col"><img src="${partida[2][1].imagen}" alt="${partida[2][1].nombre}"></div>
                <div class="col"><img src="${partida[2][2].imagen}" alt="${partida[2][2].nombre}"></div>
            </div>
            <div class="row resumen">
                <h3>${partida[1]}</h3>
                <div class="col"><img src="${partida[3][0].imagen}" alt="${partida[3][0].nombre}"></div>
                <div class="col"><img src="${partida[3][1].imagen}" alt="${partida[3][1].nombre}"></div>
                <div class="col"><img src="${partida[3][2].imagen}" alt="${partida[3][2].nombre}"></div>
            </div>
`;

  resumenCartas.innerHTML = modeloResumen;

  cambiarPantalla(match);
}
