let supabaseUrl = "https://mdlpwgfroccebwneefgj.supabase.co/rest/v1/";
let supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kbHB3Z2Zyb2NjZWJ3bmVlZmdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NDc3MTksImV4cCI6MjA5MjMyMzcxOX0.y0CHGSrJwG3bqW8tMFcoYB6iaUJk51dO7n4lubhTcGA"
console.log("hola juego de cartas")
let client = supabase.createClient(supabaseUrl, supabaseAnonKey);
async function cargarCartas() {
  // await = espera a tenir les dades abans de continuar; select("*") = agafa totes les columnes
  let resultat = await client.from("cartas").select("*");
  // resultat.data és l'array de notícies; si hi ha error, posem array buit
  let arrayCartas = resultat.data || [];
  // Passem l'array a la funció que genera l'HTML i el posa al div #llistaNoticies
  renderizarCartas(cartas);
}

let divCartas = "" // creammos variable donde posteriormente pondremos el html que se repitira en el for
const arrayCartas = [
  {
    id: 1,
    created_at: "2026-04-21 10:01:17.276873+00",
    nombre: "Espíritu de hielo",
    elixir: "1",
    imagen: "https://static.wikia.nocookie.net/clash-royale-esp/images/9/96/Espiritu_de_Hielo.png/revision/latest?cb=20160705173003&path-prefix=es"
  },
  {
    id: 2,
    created_at: "2026-04-21 10:01:47.752481+00",
    nombre: "Esqueletos",
    elixir: "2",
    imagen: "https://static.wikia.nocookie.net/clash-royale-esp/images/d/de/Esqueletos2.webp/revision/latest?cb=20231001211615&path-prefix=es"
  },
  {
    id: 3,
    created_at: "2026-04-21 10:02:53.582416+00",
    nombre: "Montapuercos",
    elixir: "4",
    imagen: "https://static.wikia.nocookie.net/clash-royale-esp/images/4/45/Hog_Rider.png/revision/latest?cb=20170316084826&path-prefix=es"
  }
]

console.log(arrayCartas[0])

function renderizarCartas(){
    for(let i = 0; i < arrayCartas.length; i++){
    divCartas = divCartas + `<div class="carta w-[250px] h-[300px] border-1 rounded-2xl shadow-2xl">
            <img class="w-full" src=${arrayCartas[i].imagen} alt="">
        </div>`
}
}
console.log(divCartas)
document.querySelector("#contenedor").innerHTML = divCartas