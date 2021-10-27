function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var gen = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (fsex[0].checked) {
      gen = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "./assets/imageMascKid.png");
      } else if (idade < 21) {
        img.setAttribute("src", "./assets/imageMascJovem.png");
      } else if (idade < 60) {
        img.setAttribute("src", "./assets/imageMascAdult.png");
      } else {
        img.setAttribute("src", "./assets/imageMascIdoso.png");
      }
    } else if (fsex[1].checked) {
      gen = "Mulher";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "./assets/imageFemKid.png");
      } else if (idade < 21) {
        img.setAttribute("src", "./assets/imageFemJovem.png");
      } else if (idade < 60) {
        img.setAttribute("src", "./assets/imageFemAdult.png");
      } else {
        img.setAttribute("src", "./assets/imageFemIdoso.png");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${gen} de ${idade} anos `;
    res.appendChild(img);
  }
}
