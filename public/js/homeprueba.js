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
            <div class="card">
        <div> <img class="image" src="${publicacion.url_imagen}" alt=""></div>
         <div class="content">
             <span class="title">${publicacion.titulo}</span>
       
           <p class="desc">${publicacion.descripcion}</p>
           <p class="desc">${publicacion.fecha}</p>
           <a class="btn btn-primary btn-sm" href="/create/${publicacion.id}">Editar</a>
          <a class="btn btn-danger btn-sm" href="/create/${publicacion.id}">Eliminar</a>
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
//         <li class="list-group-item">
//         <div class="d-flex justify-content-between align-items-center">
//         <a href="/publicacion/${publicacion.id}">${publicacion.titulo}</a>
//         <div>
//             <a class="btn btn-primary btn-sm" href="/create/${publicacion.id}">Editar</a>
//              <form action="/publicacion/${publicacion.id}" method="POST">
//                  <input type="hidden" name="_method" value="DELETE">
//                 <button type="submit" class="btn btn-danger btn-sm" id="eliminar">Eliminar</button>  
//             </form>
//         </div>
//       </div>
//     </li>
//           `;
//     })

//     resgistros += `
//     </ul>
//     `;
// } else {
//     resgistros += `
//     <p class="mt-4">No hay publicaciones disponibles.</p>
//     `;
// }