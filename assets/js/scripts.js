document.addEventListener("DOMContentLoaded", () => {
    const formularios = document.querySelectorAll(".form-opinion");

    formularios.forEach((form) => {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const nombre = form.querySelector("input[name='nombre']").value;
            const rating = form.querySelector("select[name='rating']").value;
            const comentario = form.querySelector("textarea[name='comentario']").value;

            const nuevoComentario = document.createElement("li");
            nuevoComentario.innerHTML = `<strong>${nombre}</strong> (${rating}⭐):<br>${comentario}`;

            // Busca la lista de comentarios que esté justo después del form
            const contenedor = form.closest("section").nextElementSibling;
            const lista = contenedor?.querySelector(".lista-comentarios");

            if (lista) {
                lista.appendChild(nuevoComentario);
            }

            form.reset();
        });
    });
});
