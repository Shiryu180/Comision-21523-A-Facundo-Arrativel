const obtenerPublicaciones = async () => {
    const response =await fetch('/publicaciones')
    const data = await response.json()
    return data;
}
const mostrarPublicaciones = (publicaciones, elementoHtml) => {

    let resgistros = "";
    if (publicaciones.length > 0) {
        
        publicaciones.forEach((publicacion) => {
            resgistros += `
            <div class="card mb-3" style="max-width: 440px; min-width: 440px;">
  <div class="row g-0">
    <div class="col-bg-4">
      <img src="${publicacion.url_imagen}" class="img-fluid rounded-start" alt="">
    </div>
    <div class="col-bg-8">
      <div class="card-body">
        <h5 class="card-title">${publicacion.titulo}</h5>
        <p class="card-text">${publicacion.descripcion}</p>
        <p class="card-text"><small class="text-body-secondary">${publicacion.fecha}</small></p>
        <a class="btn btn-primary btn-sm" href="/editar/${publicacion.id}">Actualizar</a>
      </div>
    </div>
  </div>
</div>
              `;
        })

    } else {
        resgistros += `
        <p class="mt-4">No hay publicaciones disponibles.</p>
        `;
    }

    elementoHtml.innerHTML = resgistros;

}


document.addEventListener('DOMContentLoaded', async () => {
    const publicaciones = await obtenerPublicaciones();
    console.log(publicaciones);

    const main = document.querySelector('#lista-publicaciones')

    mostrarPublicaciones(publicaciones, main)


})
















// if (publicaciones.length > 0) {
//     resgistros += `
//     <ul class="list-group mt-4">
//     `;
    
//     publicaciones.forEach((publicacion) => {
//         resgistros += `
//         <div class="card">
    //     <div> <img class="image" src="${publicacion.url_imagen}" alt=""></div>
    //     <div class="content">
    //         <span class="title">${publicacion.titulo}</span>
      
    //       <p class="desc">${publicacion.descripcion}</p>
    //       <p class="desc">${publicacion.fecha}</p>
    //       <a class="btn btn-primary btn-sm" href="/editar/${publicacion.id}">Actualizar</a>
    //     </div>
    //   </div>
    //          `;
//     })

//     resgistros += `
//     </ul>
//     `;
// } else {
//     resgistros += `
//     <p class="mt-4">No hay publicaciones disponibles.</p>
//     `;
// }