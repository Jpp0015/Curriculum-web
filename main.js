document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll("button[data-seccion]");
  const contenedor = document.getElementById("contenido");

  botones.forEach(boton => {
    boton.addEventListener("click", async () => {
      const seccion = boton.dataset.seccion;
      try {
        const res = await fetch(`secciones/${seccion}.html`);
        if (!res.ok) throw new Error("No se pudo cargar");
        const html = await res.text();
        contenedor.innerHTML = html;
      } catch {
        contenedor.innerHTML = `<p>No se pudo cargar la sección "${seccion}".</p>`;
      }
    });
  });
});
function activarAcordeon() {
  const botones = document.querySelectorAll(".acordeon-titulo");
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      boton.classList.toggle("active");
    });
  });
}

// Al cargar una sección, volver a activar los acordeones
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll("button[data-seccion]");
  const contenedor = document.getElementById("contenido");

  botones.forEach(boton => {
    boton.addEventListener("click", async () => {
      const seccion = boton.dataset.seccion;
      try {
        const res = await fetch(`secciones/${seccion}.html`);
        if (!res.ok) throw new Error("No se pudo cargar");
        const html = await res.text();
        contenedor.innerHTML = html;
        activarAcordeon(); // ⚠️ activa después de insertar HTML
      } catch {
        contenedor.innerHTML = `<p>No se pudo cargar la sección "${seccion}".</p>`;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll("button[data-seccion]");
  const contenedor = document.getElementById("contenido-educacion");

  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const seccion = boton.getAttribute("data-seccion");
      const archivo = `${seccion}.html`; // ejemplo: educacion-experiencia.html

      fetch(archivo)
        .then(res => {
          if (!res.ok) throw new Error("No se pudo cargar la sección.");
          return res.text();
        })
        .then(html => {
          contenedor.innerHTML = html;
        })
        .catch(err => {
          contenedor.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
        });
    });
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll("nav button");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      // Quitar clase 'activo' de todos los botones
      botones.forEach((b) => b.classList.remove("activo"));
      
      // Añadir clase 'activo' al botón clicado
      boton.classList.add("activo");

      // Cargar contenido dinámico si tienes esa funcionalidad
      const seccion = boton.getAttribute("data-seccion");
      cargarSeccion(seccion);
    });
  });
});

function cargarSeccion(nombre) {
  const ruta = `secciones/${nombre}.html`; // 👈 apuntando a la carpeta correcta

  fetch(ruta)
    .then(res => {
      if (!res.ok) throw new Error(`No se encontró el archivo: ${ruta}`);
      return res.text();
    })
    .then(html => {
      document.getElementById("contenido").innerHTML = html;
    })
    .catch(err => {
      console.error("Error cargando la sección:", err);
      document.getElementById("contenido").innerHTML = `<p style="color: red;">${err.message}</p>`;
    });
}


