let texto = 
"Karime ❤️\n\n" +
"Quería hacer algo especial para ti, algo que pudiera demostrar aunque sea un poquito lo importante que eres para mí. " +
"Esta página la hice con mucho cariño, pensando en cada momento bonito que hemos compartido y en todas esas sonrisas que me has regalado. ✨\n\n" +
"Desde que llegaste a mi vida, hay momentos que se sienten más bonitos. " +
"Me gusta poder hablar contigo, pasar tiempo contigo y crear recuerdos especiales. ❤️\n\n" +
"Gracias por cada sonrisa, por cada conversación y por cada momento bonito. " +
"Espero seguir compartiendo muchos recuerdos más contigo. 💖\n\n" +
"Esta pequeña página está hecha con mucho cariño para ti. " +
"Gracias por existir, Karime. ❤️✨";

let i = 0;

function mostrarMensaje() {
    document.getElementById("mensaje").innerHTML = "";
    i = 0;
    escribir();
}

function escribir() {
    if (i < texto.length) {
        document.getElementById("mensaje").innerHTML += texto.charAt(i);
        i++;
        setTimeout(escribir, 50);
    }
}
function modoNoche() {
    document.body.classList.toggle("noche");

    let boton = document.getElementById("botonModo");

    if (document.body.classList.contains("noche")) {
        boton.innerHTML = "☀️ Modo día";
    } else {
        boton.innerHTML = "🌙 Modo noche";
    }
}
document.addEventListener("click", function(e) {

    let corazon = document.createElement("div");

    corazon.innerHTML = "❤️";
    corazon.style.position = "fixed";
    corazon.style.left = e.clientX + "px";
    corazon.style.top = e.clientY + "px";
    corazon.style.fontSize = "50px";
corazon.style.pointerEvents = "none";
corazon.style.zIndex = "9999";
corazon.style.animation = "corazonSube 2s ease forwards";
    document.body.appendChild(corazon);
    setTimeout(() => {
        corazon.remove();
    }, 1500);

});