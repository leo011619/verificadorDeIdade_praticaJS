function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  var fsex = document.getElementsByName("radsex");
  var idade = ano - Number(fano.value);
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } else if ((fsex[0].checked = false)) {
    res.innerHTML = `Mulher de ${idade} anos.`;
  } else {
    res.innerHTML = `Homem de ${idade} anos.`;
  }
}
