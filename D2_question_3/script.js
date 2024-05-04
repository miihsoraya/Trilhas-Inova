let numeroSecreto = Math.floor(Math.random() * 11) + 20; // 0 a 10 || depois 20 a 30
let tentativas = 3;

function verificarChute() {
  const chute = parseInt(document.getElementById('chuteInput').value);
  if (chute >= 20 && chute <= 30) {
    if(chute === numeroSecreto) {
      exibirMsg("Parabéns! Você acertou", "green");
      document.getElementById('chuteInput').disabled = true;  //desabilita entrada de chute
    }else {
      tentativas--;
      if(tentativas > 0) {
        exibirMsg(`Errado! Tente novamente. Tentativas restantes: ${tentativas}`, "red");
      }else{
        exibirMsg(`Tentativas esgotadas. O número secreto era: ${numeroSecreto}`, "red");
        document.getElementById('chuteInput').disabled = true;  //desabilita entrada de chute
      }
    }
  }else{
    exibirMsg("Chute um número entre 20 e 30.", "red");
  }
}

function exibirMsg(mensagem, cor) {
  const mensagemElement = document.getElementById('mensagem');
  mensagemElement.innerText = mensagem;
  mensagemElement.style.color = cor;
}
