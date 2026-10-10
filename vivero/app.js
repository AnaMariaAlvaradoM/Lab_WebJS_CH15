// ============================================================
// Ejercicios 06, 07 y 08 · El vivero cobra vida (JavaScript)
// ============================================================
// Los datos del negocio ya vienen listos. Tú completas las 4
// funciones, donde dice // Tu código aquí. No cambies sus nombres.
// ============================================================

// ===== Datos del negocio (ya vienen listos) =====
const HORA_APERTURA = 8;
const HORA_CIERRE = 17;

const plantas = [
    { nombre: "Suculenta echeveria", categoria: "suculentas", luz: "Mucha luz", cuidado: "Riego cada 10 días.", precio: 12000, stock: 15 },
    { nombre: "Monstera deliciosa", categoria: "interior", luz: "Luz indirecta", cuidado: "Riego semanal.", precio: 68000, stock: 4 },
    { nombre: "Helecho de Boston", categoria: "interior", luz: "Sombra parcial", cuidado: "Tierra húmeda.", precio: 35000, stock: 0 },
    { nombre: "Cactus San Pedro", categoria: "exterior", luz: "Sol directo", cuidado: "Riego cada 15 días.", precio: 18500, stock: 9 },
    { nombre: "Lirio de paz", categoria: "interior", luz: "Poca luz", cuidado: "Riego semanal.", precio: 42000, stock: 0 },
    { nombre: "Poto dorado", categoria: "interior", luz: "Luz media", cuidado: "Riego cada 5 días.", precio: 25000, stock: 12 },
];

// ============================================================
// Ejercicio 06 · La lógica del negocio (no toca la página)
// ============================================================
// estaAbierto(hora): recibe la hora (0 a 23) y retorna true si el
// vivero está abierto: desde HORA_APERTURA (incluida) hasta antes
// de HORA_CIERRE.
//   estaAbierto(10) → true
//   estaAbierto(8)  → true    (a las 8:00 ya abrió)
//   estaAbierto(17) → false   (a las 5:00 p. m. ya cerró)
//
// formatearPrecio(valor): retorna el precio con signo $ y punto
// de miles, como en Colombia.
//   formatearPrecio(12000) → "$12.000"
//   formatearPrecio(4500)  → "$4.500"
//
// Pista: usa las constantes de arriba, no escribas 8 y 17 a mano.
// ============================================================

function estaAbierto(hora) {
    // Tu código aquí
    return hora >= HORA_APERTURA && hora < HORA_CIERRE;
}

function formatearPrecio(valor) {
    // Tu código aquí
    return `$${valor.toLocaleString('es-CO')}`;
}

// ============================================================
// Ejercicio 07 · El estado en la página (DOM)
// ============================================================
// mostrarEstado(): busca el <p id="estado"> y, según la hora
// actual del computador, escribe UNO de estos textos (exactos):
//   Abierto ahora. Cerramos a las 5:00 p. m.
//   Cerrado. Abrimos a las 8:00 a. m.
// y le agrega la clase "abierto" o "cerrado".
//
// Reglas: usa estaAbierto(...) para decidir, textContent para el
// texto y classList.add(...) para la clase.
// Pista: new Date().getHours() te da la hora actual.
// ============================================================

function mostrarEstado() {
    // Tu código aquí
    const horaActual = new Date ().getHours();
    const elementoEstado = document.getElementById("estado");

    if(estaAbierto(horaActual)) {
        elementoEstado.textContent = "Abierto ahora. Cerramos a las 5:00 p. m.";
        elementoEstado.classList.add("abierto");
    } else {
        elementoEstado.textContent = "Cerrado. Abrimos a las 8:00 a. m.";
        elementoEstado.classList.add("cerrado");
    }
}

// ============================================================
// Ejercicio 08 · El catálogo sale de los datos
// ============================================================
// mostrarCatalogo(): recorre el array plantas y llena el
// <ul id="catalogo"> con un <li> por planta, con esta forma:
//
//   <li class="planta">
//       <h3>Suculenta echeveria</h3>
//       <p>Riego cada 10 días. Mucha luz.</p>
//       <span class="precio">$12.000</span>
//   </li>
//
// Regla de negocio: si una planta tiene stock 0, su <li> lleva
// las clases "planta agotado" y en el <span class="precio">
// dice Agotado en vez del precio.
//
// Reglas: usa un ciclo, un if y tu función formatearPrecio(...).
// Pista: arma todo el HTML en una variable y asígnalo al final
// con innerHTML, como en Café Origen.
// ============================================================

function mostrarCatalogo() {
    // Tu código aquí
    const contenedorCatalogo = document.getElementById("catalogo");
    let htmlCatalogo = "";

    for (let i = 0; i < plantas.length; i++) {
        let planta = plantas[i];

        if (planta.stock > 0) {
            htmlCatalogo += `
                <li class="planta">
                    <span class="etiqueta-categoria">${planta.categoria}</span>
                    <h3>${planta.nombre}</h3>
                    <p>${planta.cuidado}</p>
                    <p class="luz">☀️ ${planta.luz}</p>
                    <span class="precio">${formatearPrecio(planta.precio)}</span>
                </li>
            `;
        } else {
            htmlCatalogo += `
                <li class="planta agotado">
                    <span class="etiqueta-categoria">${planta.categoria}</span>
                    <h3>${planta.nombre}</h3>
                    <p>${planta.cuidado}</p>
                    <p class="luz">☀️ ${planta.luz}</p>
                    <span class="precio">Agotado</span>
                </li>
            `;
        }
    }
    contenedorCatalogo.innerHTML = htmlCatalogo;
}

// No borres estas dos líneas: ponen a funcionar la página
mostrarEstado();
mostrarCatalogo();
