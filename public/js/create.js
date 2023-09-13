const formPost = document.querySelector("#form-post")
formPost-addEventListener('submit', async (e) =>{
    e.preventDefault();

    const titulo = document.querySelector('#titulo').value;
    const descripcion = document.querySelector('#contenido').value;
    const url_imagen = document.querySelector('#img_url').value;
    const fecha = document.querySelector('#fecha').value;

    console.log(titulo);
    console.log(descripcion);
    console.log(url_imagen);
    console.log(fecha);
    
    const response = await fetch('/publicacion', {
        method: 'post',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({titulo, descripcion, url_imagen, fecha})
    })
    const data = await response.json();

    console.log(data.msg);
    location.href = "/"
})