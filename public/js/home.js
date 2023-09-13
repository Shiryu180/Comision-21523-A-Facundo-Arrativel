const obtenerPublicaciones = async () => {
    const response =await fetch('/publicaciones')
    const data = await response.json()
    return data;
}

const mostrarPublicaciones = (publicaciones, elementoHtml) => {

    let resgistros = "";

    publicaciones.forEach((publicacion) => {
        resgistros += `
              <section class="d-flex gap-2">
              <img src="${publicacion.url_imagen}" class="rounded" height=200 >
              <div class="d-flex flex-column justify-content-between">
                  <h5>${publicacion.titulo}</h5>
                  <p>${publicacion.descripcion}</p>
                  <p>${publicacion.fecha}</p>
              </div>
              </section>
          `;
    })

    elementoHtml.innerHTML = resgistros;

}

document.addEventListener('DOMContentLoaded', async () => {
    const publicaciones = await obtenerPublicaciones();
    console.log(publicaciones);

    const main = document.querySelector('#lista-publicaciones')

    mostrarPublicaciones(publicaciones, main)


})