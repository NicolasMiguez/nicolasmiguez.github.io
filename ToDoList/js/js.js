let vacio = document.getElementById("vacio");
let listado = document.getElementById("listado");
let popCarga = document.getElementById("carga");

let btnMas = document.getElementById("btnAgregar");
let btnMasGrande = document.getElementById("masGrande");

let cruzCarga = document.getElementById("cruzCarga");
let cancelarCarga = document.getElementById("cancelarCarga");
let aceptarCarga = document.getElementById("aceptarCarga");

let prioridad1 = document.getElementById("prioridad1");
let prioridad2 = document.getElementById("prioridad2");
let prioridad3 = document.getElementById("prioridad3");
let prioridad4 = document.getElementById("prioridad4");

let cargaTitulo = document.getElementById("cargaTitulo");
let cargaTipo = document.getElementById("cargaTipo");
let cargaDescripcion = document.getElementById("cargaDescripcion");

prioridad1.addEventListener("click", () => {
  prioridad1.classList.add("prioridad_activo");
  prioridad2.classList.remove("prioridad_activo");
  prioridad3.classList.remove("prioridad_activo");
  prioridad4.classList.remove("prioridad_activo");
});
prioridad2.addEventListener("click", () => {
  prioridad1.classList.remove("prioridad_activo");
  prioridad2.classList.add("prioridad_activo");
  prioridad3.classList.remove("prioridad_activo");
  prioridad4.classList.remove("prioridad_activo");
});

prioridad3.addEventListener("click", () => {
  prioridad1.classList.remove("prioridad_activo");
  prioridad2.classList.remove("prioridad_activo");
  prioridad3.classList.add("prioridad_activo");
  prioridad4.classList.remove("prioridad_activo");
});

prioridad4.addEventListener("click", () => {
  prioridad1.classList.remove("prioridad_activo");
  prioridad2.classList.remove("prioridad_activo");
  prioridad3.classList.remove("prioridad_activo");
  prioridad4.classList.add("prioridad_activo");
});

function resetPrioridad() {
  prioridad1.classList.add("prioridad_activo");
  prioridad2.classList.remove("prioridad_activo");
  prioridad3.classList.remove("prioridad_activo");
  prioridad4.classList.remove("prioridad_activo");
}

let tareas = 0;

function vacioOno() {
  if (tareas == 0) {
    vacio.classList.add("d-flex");
  } else {
    vacio.classList.add("d-none");
  }
}
vacioOno();

//funciones
function cerrarCarga() {
  popCarga.classList.remove("d-flex");
}
function abrirCarga() {
  popCarga.classList.add("d-flex");
}

//Acciones
btnMas.addEventListener("click", () => {
  abrirCarga();
});

btnMasGrande.addEventListener("click", () => {
  abrirCarga();
});

cruzCarga.addEventListener("click", () => {
  cerrarCarga();
});

cancelarCarga.addEventListener("click", () => {
  cerrarCarga();
});

function blanquearForm() {
  cargaTitulo.value = "";
  cargaDescripcion.value = "";
  cargaTipo.value = 1;
  resetPrioridad();
}

aceptarCarga.addEventListener("click", () => {
  let tipo = "fa-house";
  if (cargaTipo.value == 1) {
    tipo = "fa-user";
  } else if (cargaTipo.value == 2) {
    tipo = "fa-house";
  } else if (cargaTipo.value == 3) {
    tipo = "fa-gamepad";
  } else if (cargaTipo.value == 4) {
    tipo = "fa-briefcase";
  }

  let prioridad = "prioridad1";
  if (prioridad1.classList.contains("prioridad_activo")) {
    prioridad = "prioridad1";
  } else if (prioridad2.classList.contains("prioridad_activo")) {
    prioridad = "prioridad2";
  } else if (prioridad3.classList.contains("prioridad_activo")) {
    prioridad = "prioridad3";
  } else if (prioridad4.classList.contains("prioridad_activo")) {
    prioridad = "prioridad4";
  }

  let ids = "tarea" + tareas;
  let check = "check" + tareas;
  let trash = "trash" + tareas;

  let modeloTarea = `
  <div id="${ids}" class="card">
    <div class="card-body">
      <div class="row align-items-center">
        <div class="col-2 tipo_tarea ${prioridad}"><i class="fa-solid ${tipo}"></i></div>
        <div class="col-7">
          <p class="tit">${cargaTitulo.value}</p>
          <p class="desc">${cargaDescripcion.value}</p>
        </div>
        <div class="col-2"><i id="${check}" class="acciones fa-regular fa-square" onclick="cambioCheck(${check})"></i></div>
        <div class="col-1"><i class="acciones fa-solid fa-trash" onclick="eliminarTarea(${ids})"></i></div>
      </div>
    </div>
  </div>
  `;

  function crearTarea() {
    listado.innerHTML += modeloTarea;
  }

  tareas++;
  cerrarCarga();
  vacioOno();
  crearTarea();
  blanquearForm();
});

let cambioCheck = (check) => {
  if (check.classList.contains("fa-square")) {
    check.classList.remove("fa-square");
    check.classList.add("fa-square-check");
  } else {
    check.classList.add("fa-square");
    check.classList.remove("fa-square-check");
  }
};

let eliminarTarea = (ids) => {
  ids.remove();
};

// trash.addEventListener("click", () => {
//   tarea0.remove();
// });
//trash.addEventListener("click", () => {});
