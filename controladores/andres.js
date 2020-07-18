//1. necesito un objeto AJAX para comunicarme
let objetoAJAX = new XMLHttpRequest();

//2. URL del servicio
let url = "https://api.spotify.com/v1/artists/49Z1AvGeUaBSanPaOmplK6/top-tracks?country=US";

//3. saber si necesito permisos 
let token = "Bearer BQDskW59juLCql_kmI8n8PwhNo88dlvWZ7DhXrLJi3zxyqp3tbk9NyVjhLcfiXNBrZ8PcrdD-4wjKy_QQbPFf7a5E1xZ2X1m6Wod2Z0rbk-Qq1cfXCFmJ_ho8lXH1wMu6unN751I-E3U10kMtdtta05YQS9waPE";




//4. abra la conexion
objetoAJAX.open('GET', url, true);

//5.pedir permiso o enviar headers
objetoAJAX.setRequestHeader('Authorization', token);

//6.cargar la informacion del servicio
objetoAJAX.onload = function () {

    let respuesta = JSON.parse(this.responseText);
    console.log(respuesta);
    console.log(respuesta.tracks[0].preview_url); 
        console.log(respuesta.tracks[0].album.images[0].url);
        console.log(respuesta.tracks[0].album.name);
        console.log(respuesta.tracks[0].name);
        
        let imagen1 = document.getElementById("imagen1");
        imagen1.src = respuesta.tracks[0].album.images[0].url;
    
        let album = document.getElementById("album");
        album.textContent = respuesta.tracks[0].album.name;
    
        let cancion = document.getElementById("cancion");
        cancion.textContent = respuesta.tracks[0].name;
    
    
        let audio = document.getElementById("audio");
        audio.src = respuesta.tracks[0].preview_url;

          // console.log(respuesta); 
//     // console.log(respuesta.tracks); 
//     // console.log(respuesta.tracks[9]); 
   console.log(respuesta.tracks[9].preview_url);
     console.log(respuesta.tracks[9].name);
     console.log(respuesta.tracks[9].album.name);
 console.log(respuesta.tracks[9].album.images[0].url); 

     let imagen2 = document.getElementById("imagen2");
    imagen2.src = respuesta.tracks[9].album.images[0].url;

     let album2 = document.getElementById("album2");
    album2.textContent = respuesta.tracks[9].album.name;

    let cancion2 = document.getElementById("cancion2");
    cancion2.textContent = respuesta.tracks[9].name;

     let audio2 = document.getElementById("audio2");
    audio2.src = respuesta.tracks[9].preview_url;


// // console.log(respuesta); 
// //     console.log(respuesta.tracks); 
// //     console.log(respuesta.tracks[8]); 
     console.log(respuesta.tracks[8].preview_url);
    console.log(respuesta.tracks[8].name);
     console.log(respuesta.tracks[8].album.name);
console.log(respuesta.tracks[8].album.images[0].url); 

    let imagen3 = document.getElementById("imagen3");
   imagen3.src = respuesta.tracks[8].album.images[0].url;

    let album3 = document.getElementById("album3");
   album3.textContent = respuesta.tracks[8].album.name;

   let cancion3 = document.getElementById("cancion3");
   cancion3.textContent = respuesta.tracks[8].name;

    let audio3 = document.getElementById("audio3");
   audio3.src = respuesta.tracks[8].preview_url;




}

//7. cierre el sobre y envie
objetoAJAX.send();