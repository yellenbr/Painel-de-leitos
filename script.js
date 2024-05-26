
function iniciaisNome(nome){
  nome = nome.toUpperCase();
  nome = nome.trim();
  let temp = nome[0];
  for(let i = 0; i < nome.length;i++){
      if(nome[i] === " "){
          temp = temp + " " + nome[i+1]
      }
  }
  return temp;
}

function mostraInfo(atend,nome,status,hora,nascimento){
  let telaTemp;
  let atendIDTemp;
  let nomeIDTemp;
  let statusIDTemp;
  let nascimentoIDTemp;
  let horaIDTemp;
  let simboloTemp;
  let tela;
  let atendID;
  let nomeID;
  let statusID;
  let nascimentoID;
  let horaID;
  let simboloID;
  let image;

  for(let i = 1; i <= 12 ;i++){
      telaTemp = "#tela"+i;
      tela = document.querySelector(telaTemp); 
      if(tela.classList.contains("hide")){
          atendIDTemp = "#atendID" +i;
          nomeIDTemp = "#nomeID" +i;
          statusIDTemp = "#statusID"+i;
          nascimentoIDTemp = "#nascimentoID"+i;
          horaIDTemp = "#horaID"+i;
          simboloTemp = "simboloID"+i;
          break
      }
  }

  atendID = document.querySelector(atendIDTemp);
  nomeID = document.querySelector(nomeIDTemp);
  statusID = document.querySelector(statusIDTemp);
  nascimentoID = document.querySelector(nascimentoIDTemp);
  horaID = document.querySelector(horaIDTemp);
  simboloID = simboloTemp;

  atendID.innerHTML = "Atendimento: " + atend;
  nomeID.innerHTML = " " + iniciaisNome(nome);
  statusID.innerHTML = "Status: " +status;
  nascimentoID.innerHTML = "DT Nasc: " +nascimento;
  horaID.innerHTML = "Hora Admissão: " +hora;

  image = document.getElementById(simboloID)

  if(status == "Sala de preparo"){
    image.src = "assets/time.png";
    tela.classList.remove("hide")
  }else if(status == "Sala Operatória"){
    image.src = "assets/cirurgia.png";
    tela.classList.remove("hide")
  }else if(status == "Sala de Recuperação Pós-Anestésica"){
    image.src = "assets/anestesica.png";
    tela.classList.remove("hide")
  }else{
    tela.classList.add("hide");
  }
}

document.addEventListener("DOMContentLoaded",function(){
  fetch("http://localhost:3000/arquivoCSV")
  .then(response => response.json())
  .then(data => {
    for(let i = 0; i< data.length;i++){
      mostraInfo(data[i].NR_ATENDIMENTO,data[i].NOME_PACIENTE,data[i].STATUS,data[i].HORA,data[i].NASCIMENTO)
    }
  })
})





