//1. necesito un objeto AJAX para comunicarme
let objetoAJAX = new XMLHttpRequest();

//2. URL del servicio
let url = "https://api.spotify.com/v1/artists/49Z1AvGeUaBSanPaOmplK6/top-tracks?country=US";

//3. saber si necesito permisos 
let token = "Bearer BQA9h2ru2A3MfMGcuHV9dNBadJNuCJrB-w52lE07P8F-aNUi0WQbLsAFUdRph0bmXb-KouqRoxtDMn5bLn03eE4RuXYh90bJM-qRCjg-aWdZHPwnQ-ekFJ0meWX0HPqiI3Dmfx_Z_yygXxYUNoIPWzXidnSpbrY";

//4. abra la conexion
objetoAJAX.open('GET', url, true);


//5.pedir permiso o enviar headers
objetoAJAX.setRequestHeader('Authorization', token);

//6.cargar la informacion del servicio
objetoAJAX.onload = function() {
    let respuesta = JSON.parse(this.responseText);
    console.log(respuesta);
    //
}

//7. cierre el sobre y envie
objetoAJAX.send();
