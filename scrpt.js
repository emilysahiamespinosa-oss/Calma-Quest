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

function responder() {
  const mensajeOriginal = document.getElementById("mensaje").value;
  const mensaje = mensajeOriginal.toLowerCase();
  let respuesta = "";

  if (mensaje.trim() === "") {
    respuesta = "No pasa nada si no sabes qué decir 💗 Puedes tomarte tu tiempo. Estoy aquí para leerte.";
  }

  else if (mensaje.includes("triste") || mensaje.includes("llorar")) {
    respuesta = "Siento que estés pasando por un momento tan pesado 💙 Estar triste no te hace débil. Hablar de ello ya es un paso muy valiente.";
  }

  else if (mensaje.includes("solo") || mensaje.includes("sola")) {
    respuesta = "Sentirse solo/a duele mucho 😔 Aunque ahora se sienta así, tu voz importa y lo que sientes merece ser escuchado.";
  }

  else if (mensaje.includes("cansado") || mensaje.includes("agotado")) {
    respuesta = "Estar cansado emocionalmente puede ser muy duro 🌱 Tal vez has estado sosteniendo demasiado por mucho tiempo. Mereces descanso y comprensión.";
  }

  else if (mensaje.includes("ansioso") || mensaje.includes("ansiedad") || mensaje.includes("nervioso")) {
    respuesta = "La ansiedad puede hacer que todo se sienta más grande de lo que es 💭 Respira despacio. No tienes que resolver todo ahora.";
  }

  else if (mensaje.includes("miedo") || mensaje.includes("asustado")) {
    respuesta = "Sentir miedo es humano 🤍 No significa que no seas fuerte, significa que te importa. Estoy aquí contigo en este momento.";
  }

  else if (mensaje.includes("feliz") || mensaje.includes("bien")) {
    respuesta = "Me alegra leer eso ✨ Disfrutar los momentos buenos también es importante. ¿Qué fue lo que te hizo sentir así?";
  }

  else if (mensaje.includes("familia") || mensaje.includes("amigos")) {
    respuesta = "Las relaciones pueden ser complicadas 💞 A veces duelen más porque nos importan. Gracias por confiar y contármelo.";
  }

  else {
    respuesta = "Gracias por abrirte 💗 Lo que sientes es válido, incluso si es difícil de explicar con palabras. Puedes seguir contándome si quieres.";
  }

  document.getElementById("respuesta").innerText = respuesta;
  document.getElementById("mensaje").value = "";
}

function logout() {
  document.getElementById("chat").classList.add("hidden");
  document.getElementById("login").classList.remove("hidden");

  // Limpieza opcional (recomendado)
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
  document.getElementById("mensaje").value = "";
  document.getElementById("respuesta").innerText = "";
}
