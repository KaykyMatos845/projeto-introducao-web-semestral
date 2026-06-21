let estrelasAtend = document.querySelectorAll('#starsAtendimento .star');
let inputAtend = document.getElementById('notaAtendimento');
let notaAtendAtual = 0;

for (let i = 0; i < estrelasAtend.length; i++) {
  estrelasAtend[i].addEventListener('mouseover', function() {
    pintaEstrelas(estrelasAtend, i + 1);
  });
  
  estrelasAtend[i].addEventListener('mouseout', function() {
    pintaEstrelas(estrelasAtend, notaAtendAtual);
  });
  
  estrelasAtend[i].addEventListener('click', function() {
    notaAtendAtual = i + 1;
    inputAtend.value = notaAtendAtual;
    pintaEstrelas(estrelasAtend, notaAtendAtual);
  });
}

let estrelasEspera = document.querySelectorAll('#starsEspera .star');
let inputEspera = document.getElementById('notaEspera');
let notaEsperaAtual = 0;

for (let i = 0; i < estrelasEspera.length; i++) {
  estrelasEspera[i].addEventListener('mouseover', function() {
    pintaEstrelas(estrelasEspera, i + 1);
  });
  
  estrelasEspera[i].addEventListener('mouseout', function() {
    pintaEstrelas(estrelasEspera, notaEsperaAtual);
  });
  
  estrelasEspera[i].addEventListener('click', function() {
    notaEsperaAtual = i + 1;
    inputEspera.value = notaEsperaAtual;
    pintaEstrelas(estrelasEspera, notaEsperaAtual);
  });
}

function pintaEstrelas(lista, limite) {
  for (let j = 0; j < lista.length; j++) {
    if (j < limite) {
      lista[j].classList.remove('bi-star');
      lista[j].classList.add('bi-star-fill', 'active');
    } else {
      lista[j].classList.remove('bi-star-fill', 'active');
      lista[j].classList.add('bi-star');
    }
  }
}

let campoSugestao = document.getElementById('sugestao');
let contadorTexto = document.getElementById('charCount');

campoSugestao.addEventListener('keyup', function() {
  contadorTexto.innerHTML = campoSugestao.value.length;
});

document.getElementById('formSatisfacao').addEventListener('submit', function (e) {
  e.preventDefault();

  let valAtend = document.getElementById('notaAtendimento').value;
  let valEspera = document.getElementById('notaEspera').value;

  if (valAtend == "" || valEspera == "") {
    alert("Por favor, preencha a nota do atendimento e do tempo de espera antes de enviar.");
    return false;
  }

  alert("Formulário enviado com sucesso!\nAtendimento: " + valAtend + "\nEspera: " + valEspera);

  this.reset();
  
  notaAtendAtual = 0;
  notaEsperaAtual = 0;
  document.getElementById('notaAtendimento').value = "";
  document.getElementById('notaEspera').value = "";
  
  pintaEstrelas(estrelasAtend, 0);
  pintaEstrelas(estrelasEspera, 0);
  
  contadorTexto.innerHTML = "0";
});
