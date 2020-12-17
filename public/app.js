var respuesta;
function consulta(){
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            //console.log(this.responseText);
            respuesta = JSON.parse(this.responseText);
            console.log(respuesta.value);
            //Noticia #1
            document.getElementById("prueba").innerHTML = respuesta.value[0].description;
            document.getElementById('enlace').setAttribute('src', respuesta.value[0].image.thumbnail.contentUrl);
            document.getElementById('infonoticia1').setAttribute('href', respuesta.value[0].url);
            //Noticia #2
            document.getElementById("prueba2").innerHTML = respuesta.value[1].description;
            document.getElementById('enlace2').setAttribute('src', respuesta.value[1].image.thumbnail.contentUrl);
            document.getElementById('infonoticia2').setAttribute('href', respuesta.value[1].url);
            //Noticia #3
            document.getElementById("prueba3").innerHTML = respuesta.value[2].description;
            document.getElementById('enlace3').setAttribute('src', respuesta.value[2].image.thumbnail.contentUrl);
            document.getElementById('infonoticia3').setAttribute('href', respuesta.value[2].url);
            //Noticia #4   
            document.getElementById("prueba4").innerHTML = respuesta.value[3].description;
            document.getElementById('enlace4').setAttribute('src', respuesta.value[3].image.thumbnail.contentUrl);
            document.getElementById('infonoticia4').setAttribute('href', respuesta.value[3].url);

        
        }
    });
    
    xhr.open("GET", "https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw");
    xhr.setRequestHeader("x-bingapis-sdk", "true");
    xhr.setRequestHeader("x-rapidapi-key", "f2434275d6msha4bde90ffe2b69fp1dc7c8jsna45b823b0c02");
    xhr.setRequestHeader("x-rapidapi-host", "bing-news-search1.p.rapidapi.com");
    
    xhr.send(data);
}
