//1. necesito un objeto AJAX para comunicarme
let objetoAJAX = new XMLHttpRequest();

//2. URL del servicio
let url = "https://api.spotify.com/v1/artists/7bXgB6jMjp9ATFy66eO08Z/top-tracks?country=US";

//3. saber si necesito permisos 
let token = "Bearer BQBAdMAizkfhYAE7YYVxXkIiiJfANipcW3iLA7e0tcjHiOgiOL-PiampQFIvZ9iE4kuSzdwoTJJl5-hfO0W-EDerlrVSyGUpclXPfOP0mFZ4Bct8WHPeCCPV-OqmCtUDWh8cGMpytbxJUkDMzTYbB50T7u3fOfM";




//4. abra la conexion
objetoAJAX.open('GET', url, true);

//5.pedir permiso o enviar headers
objetoAJAX.setRequestHeader('Authorization', token);

//6.cargar la informacion del servicio
objetoAJAX.onload = function() {

    let respuesta = JSON.parse(this.responseText);
       //     console.log(respuesta); 
//     console.log(respuesta.tracks); 
//     // console.log(respuesta.tracks[4]);
console.log(respuesta.tracks[4].preview_url); 
console.log(respuesta.tracks[4].album.images[0].url);
console.log(respuesta.tracks[4].album.name);
console.log(respuesta.tracks[4].name);

let imagen1 = document.getElementById("imagen1");
imagen1.src = respuesta.tracks[4].album.images[0].url;

let album = document.getElementById("album");
album.textContent = respuesta.tracks[4].album.name;

let cancion = document.getElementById("cancion");
cancion.textContent = respuesta.tracks[4].name;

let audio = document.getElementById("audio");
audio.src = respuesta.tracks[4].preview_url;


//     // console.log(respuesta); 
//     // console.log(respuesta.tracks); 
//     // console.log(respuesta.tracks[1]); 
console.log(respuesta.tracks[1].preview_url);
console.log(respuesta.tracks[1].name);
console.log(respuesta.tracks[1].album.name);
console.log(respuesta.tracks[1].album.images[0].url); 

let imagen2 = document.getElementById("imagen2");
imagen2.src = respuesta.tracks[1].album.images[0].url;

let album2 = document.getElementById("album2");
album2.textContent = respuesta.tracks[1].album.name;

let cancion2 = document.getElementById("cancion2");
cancion2.textContent = respuesta.tracks[1].name;

let audio2 = document.getElementById("audio2");
audio2.src = respuesta.tracks[1].preview_url;


// // console.log(respuesta); 
// console.log(respuesta.tracks); 
// console.log(respuesta.tracks[6]); 
 console.log(respuesta.tracks[6].preview_url);
console.log(respuesta.tracks[6].name);
console.log(respuesta.tracks[6].album.name);
console.log(respuesta.tracks[6].album.images[0].url); 

let imagen3 = document.getElementById("imagen3");
imagen3.src = respuesta.tracks[6].album.images[0].url;

let album3 = document.getElementById("album3");
album3.textContent = respuesta.tracks[6].album.name;

let cancion3 = document.getElementById("cancion3");
cancion3.textContent = respuesta.tracks[6].name;

let audio3 = document.getElementById("audio3");
audio3.src = respuesta.tracks[6].preview_url;

   
    
}

//7. cierre el sobre y envie
objetoAJAX.send();