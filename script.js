// ====== LOGIN ======
function login() {
  const email = document.getElementById("email").value;
  const error = document.getElementById("error");

  if (email === "") {
    error.innerText = "Por favor ingresa tu correo.";
    return;
  }

  error.innerText = "";

  // Ocultar login y mostrar chat
  document.getElementById("login").classList.add("hidden");
  document.getElementById("chat").classList.remove("hidden");
}

// ===== BANCO DE FRASES =====
const frases = {
  tristeza: [
    "💙 Siento que estés pasando por un momento tan pesado. Estar triste no te hace débil. Hablar de ello ya es un paso muy valiente.",
    "💔 Está bien llorar y dejar salir lo que sientes. Tus emociones son válidas y merecen atención.",
    "🌧️ Aunque todo parezca gris ahora, tu dolor importa y estoy aquí para escucharte.",
    "💌 Tomarte tu tiempo para sentir no es un error; es cuidarte a ti mismo/a."
  ],
  soledad: [
    "😔 Sentirse solo/a duele mucho. Aunque ahora se sienta así, tu voz importa y lo que sientes merece ser escuchado.",
    "💛 No estás solo/a en realidad, y está bien pedir ayuda o compañía.",
    "🕊️ A veces la soledad nos permite reflexionar y reconectar con nuestro interior.",
    "🌸 Está bien sentir nostalgia por compañía; tu bienestar es importante."
  ],
  cansancio: [
    "🌱 Estar cansado emocionalmente puede ser muy duro. Mereces descanso y comprensión.",
    "💤 Está bien parar un momento y recargar energías, no es rendirse.",
    "💛 Escuchar a tu cuerpo y a tus emociones es un acto de amor propio.",
    "💌 Respira, descansa y recuerda que cada pequeño paso cuenta."
  ],
  felicidad: [
    "✨ Me alegra leer eso. Disfrutar los momentos buenos también es importante. ¿Qué fue lo que te hizo sentir así?",
    "💖 Que sientas felicidad es maravilloso, incluso las pequeñas alegrías cuentan mucho.",
    "🌸 Atesora los momentos felices y permítete sonreír sin culpa.",
    "💛 Está bien disfrutar y reconocer la alegría que sientes hoy."
  ],
  ansiedad: [
    "💭 La ansiedad puede hacer que todo se sienta más grande de lo que es. Respira despacio y date tiempo.",
    "💙 No tienes que resolver todo ahora; está bien ir paso a paso.",
    "✨ Cada emoción que sientes merece ser reconocida y cuidada.",
    "💌 Reconocer tu ansiedad es un acto valiente y consciente."
  ],
  miedo: [
    "🤍 Sentir miedo es humano. No significa que no seas fuerte, significa que te importa.",
    "💛 Está bien sentirse inseguro/a en algunas situaciones; tu corazón merece cuidado.",
    "🕊️ La valentía no es no tener miedo, sino seguir adelante aun sintiéndolo.",
    "💌 Tus emociones importan y merecen atención, incluso cuando asustan."
  ],
  familia: [
    "💞 Las relaciones familiares pueden ser complicadas. A veces duelen más porque nos importan mucho.",
    "💌 Está bien poner límites y cuidar tu bienestar dentro de la familia.",
    "🌹 Tu voz importa, incluso si no todos la escuchan.",
    "💛 El amor familiar no siempre es perfecto, y está bien buscar tu paz emocional."
  ],
  amigos: [
    "💛 Los amigos también pueden doler, pero es importante rodearte de quienes te respetan y apoyan.",
    "💌 Está bien alejarse de relaciones que no aportan a tu bienestar.",
    "🌸 Agradece a quienes te escuchan y acompaña a quienes también lo necesitan.",
    "💖 Las amistades verdaderas valoran tu bienestar y emociones."
  ],
  perdida: [
    "💔 Perder a alguien que amas duele mucho y está bien llorar, sentir y recordar con cariño.",
    "🕊️ La ausencia deja vacío, pero el amor que quedó sigue vivo en tu corazón.",
    "💌 Está bien extrañar y sentir tristeza; tu corazón necesita tiempo para sanar.",
    "💙 Hablar de lo que sientes sobre la pérdida ayuda a procesar y aliviar el dolor."
  ],
  general: [
    "💗 Gracias por abrirte. Lo que sientes es válido, incluso si es difícil de explicar con palabras.",
    "🌟 Cada emoción que experimentas merece ser reconocida y cuidada.",
    "💛 Está bien tomarte tu tiempo para procesar lo que sientes.",
    "💌 Aquí estoy para escucharte y acompañarte en lo que necesites."
  ]
};

// ===== FUNCION RESPONDER AUTOMÁTICA =====
function responder() {
  const mensajeOriginal = document.getElementById("mensaje").value;
  const mensaje = mensajeOriginal.toLowerCase();
  let categoria = "general";

  // --- Detección automática aproximada ---
  if (mensaje.match(/triste|llorar|deprimido|dolor/)) categoria = "tristeza";
  else if (mensaje.match(/solo|sola|abandono|desaparecido/)) categoria = "soledad";
  else if (mensaje.match(/cansado|agotado|fatiga|estresado/)) categoria = "cansancio";
  else if (mensaje.match(/feliz|bien|alegre|contento/)) categoria = "felicidad";
  else if (mensaje.match(/ansioso|ansiedad|nervioso|preocupado/)) categoria = "ansiedad";
  else if (mensaje.match(/miedo|asustado|temor|aterrorizado/)) categoria = "miedo";
  else if (mensaje.match(/familia|padres|hermanos|hijos/)) categoria = "familia";
  else if (mensaje.match(/amigos|amistad|compañeros/)) categoria = "amigos";
  else if (mensaje.match(/perdida|muerto|fallecido|adiós/)) categoria = "perdida";

  // --- Elegir frase aleatoria ---
  const lista = frases[categoria] || frases.general;
  const respuesta = lista[Math.floor(Math.random() * lista.length)];

  document.getElementById("respuesta").innerText = respuesta;
  document.getElementById("mensaje").value = "";
}

// ===== LOGIN Y LOGOUT =====
function logout() {
  document.getElementById("chat").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");

  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("mensaje").value = "";
  document.getElementById("respuesta").innerText = "";
}

function login() {
  const email = document.getElementById("email").value;
  const error = document.getElementById("error");

  if (!email) {
    error.innerText = "Por favor ingresa tu correo.";
    return;
  }

  error.innerText = "";
  document.getElementById("login").classList.add("hidden");
  document.getElementById("chat").classList.remove("hidden");
}
