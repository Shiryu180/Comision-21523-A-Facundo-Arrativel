
const formGuardar = document.querySelector("#form-guardar")

formGuardar-addEventListener('submit', (e) => {
    e.preventDefault();

    const inputTitulo = document.querySelector('#titulo-post').value;
    const inputDetalle = document.querySelector('#detalle-post').value;

    console.log(inputTitulo);
    console.log(inputDetalle);
})


const formPost = document.querySelector("#form-post")
formPost-addEventListener('submit', (e) =>{
    e.preventDefault();

    const Titulo = document.querySelector('#titulo').value;
    const Contenido = document.querySelector('#contenido').value;
    const img_URL = document.querySelector('#img_url').value;
    const Fecha = document.querySelector('#fecha').value;

    console.log(Titulo);
    console.log(Contenido);
    console.log(img_URL);
    console.log(Fecha);

})