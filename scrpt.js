function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email !== "" && password !== "") {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("chat").classList.remove("hidden");
  } else {
    alert("Por favor ingresa correo y contraseña");
  }
}

function responder() {
  const mensaje = document.getElementById("mensaje").value.toLowerCase();
  let respuesta = "";

  if (mensaje.includes("triste") || mensaje.includes("mal")) {
    respuesta = "💙 Está bien sentirse así. Recuerda que incluso los días nublados pasan. No estás solo/a.";
  } 
  else if (mensaje.includes("cansado") || mensaje.includes("agotado")) {
    respuesta = "🌸 Descansar también es avanzar. Sé amable contigo mismo/a.";
  }
  else if (mensaje.includes("feliz") || mensaje.includes("bien")) {
    respuesta = "✨ Me alegra mucho leerte. Disfruta este momento y compártelo.";
  }
  else {
    respuesta = "💗 Gracias por confiar en mí. Todo lo que sientes es válido y mereces cosas bonitas.";
  }

  document.getElementById("respuesta").innerText = respuesta;
}
