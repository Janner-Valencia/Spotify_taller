//1. necesito un objeto AJAX para comunicarme
let objetoAJAX = new XMLHttpRequest();

//2. URL del servicio
let url = "https://api.spotify.com/v1/artists/5OpHOcQt4FL65PSKlkZCIn/top-tracks?country=US";

//3. saber si necesito permisos 
let token = "Bearer BQAMwW9o-XUrCDOgKbTuoSBNmTkEzEXOrtHx15RmG2EvFBso8VkwJP_ylIbLLGMto2tovKZPYM46y00jl_guyBzxEe_THlNDhtPoLME20jSdnOy-ctaU4S3KKhzsTuwo-dRcXv6sZ0_upkYNMlduXhwtqxvoaEA";




//4. abra la conexion
objetoAJAX.open('GET', url, true);

//5.pedir permiso o enviar headers
objetoAJAX.setRequestHeader('Authorization', token);

//6.cargar la informacion del servicio
objetoAJAX.onload = function() {

    let respuesta = JSON.parse(this.responseText);
    // console.log(respuesta); 
    // console.log(respuesta.tracks); 
    // console.log(respuesta.tracks[1]);
    console.log(respuesta.tracks[1].preview_url); 
     console.log(respuesta.tracks[1].album.images[0].url);
       console.log(respuesta.tracks[1].album.name);

       let imagen1 = document.getElementById("imagen1");
    imagen1.src = respuesta.tracks[1].album.images[0].url;

    let album1 = document.getElementById("album1");
    album1.textContent = respuesta.tracks[1].album.name;

    let audio1 = document.getElementById("audio1");
    audio1.src = respuesta.tracks[1].preview_url;

    
// //     // console.log(respuesta); 
// //     // console.log(respuesta.tracks); 
// //     // console.log(respuesta.tracks[0]); 
   console.log(respuesta.tracks[0].preview_url);
     console.log(respuesta.tracks[0].album.name);
 console.log(respuesta.tracks[0].album.images[0].url); 

     let imagen2 = document.getElementById("imagen2");
    imagen2.src = respuesta.tracks[0].album.images[0].url;

     let album2 = document.getElementById("album2");
    album2.textContent = respuesta.tracks[0].album.name;

     let audio2 = document.getElementById("audio2");
    audio2.src = respuesta.tracks[0].preview_url;

    
// // console.log(respuesta); 
// //     console.log(respuesta.tracks); 
// //     console.log(respuesta.tracks[2]); 
     console.log(respuesta.tracks[2].preview_url);
    console.log(respuesta.tracks[2].name);
     console.log(respuesta.tracks[2].album.name);
console.log(respuesta.tracks[2].album.images[0].url); 

    let imagen3 = document.getElementById("imagen3");
   imagen3.src = respuesta.tracks[2].album.images[0].url;

    let album3 = document.getElementById("album3");
   album3.textContent = respuesta.tracks[2].album.name;

    let audio3 = document.getElementById("audio3");
   audio3.src = respuesta.tracks[2].preview_url;
    
}

//7. cierre el sobre y envie
objetoAJAX.send();