document.addEventListener("DOMContentLoaded", () => {
    const burguerBtn = document.getElementById("burguer");
    const sidevar = document.getElementById("hamburguesa");

    if (!burguerBtn || !sidevar) return;

    burguerBtn.addEventListener("click", () => {
        // Si está oculto, lo muestra; si está visible, lo oculta
        if (sidevar.classList.contains("mostrar")) {
            sidevar.classList.remove("mostrar");
        } else {
            sidevar.classList.add("mostrar");
        }
    });
});
