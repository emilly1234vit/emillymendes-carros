const meuCarroEsportivo = new CarroEsportivo('Ferrari', 'Vermelho');
const meuCaminhao = new Caminhao('Volvo', 'Azul', 10000);

// Carro Esportivo
document.getElementById('ligarCarroEsportivo').addEventListener('click', () => {
  meuCarroEsportivo.ligar();
  atualizarCarroEsportivoStatus();
});

document.getElementById('desligarCarroEsportivo').addEventListener('click', () => {
  meuCarroEsportivo.desligar();
  atualizarCarroEsportivoStatus();
});

document.getElementById('acelerarCarroEsportivo').addEventListener('click', () => {
  meuCarroEsportivo.acelerar(10);
  atualizarCarroEsportivoStatus();
});

document.getElementById('frearCarroEsportivo').addEventListener('click', () => {
  meuCarroEsportivo.frear(10);
  atualizarCarroEsportivoStatus();
});

document.getElementById('ativarTurbo').addEventListener('click', () => {
  meuCarroEsportivo.ativarTurbo();
  atualizarCarroEsportivoStatus();
});

document.getElementById('desativarTurbo').addEventListener('click', () => {
  meuCarroEsportivo.desativarTurbo();
  atualizarCarroEsportivoStatus();
});

function atualizarCarroEsportivoStatus() {
  document.getElementById('carroEsportivoStatus').textContent = `Modelo: ${meuCarroEsportivo.modelo}, Cor: ${meuCarroEsportivo.cor}, Ligado: ${meuCarroEsportivo.ligado}, Velocidade: ${meuCarroEsportivo.velocidade} km/h, Turbo: ${meuCarroEsportivo.turboAtivado ? 'Ativado' : 'Desativado'}`;
}

// Caminhão
document.getElementById('ligarCaminhao').addEventListener('click', () => {
  meuCaminhao.ligar();
  atualizarCaminhaoStatus();
});

document.getElementById('desligarCaminhao').addEventListener('click', () => {
  meuCaminhao.desligar();
  atualizarCaminhaoStatus();
});

document.getElementById('acelerarCaminhao').addEventListener('click', () => {
  meuCaminhao.acelerar(5);
  atualizarCaminhaoStatus();
});

document.getElementById('frearCaminhao').addEventListener('click', () => {
  meuCaminhao.frear(5);
  atualizarCaminhaoStatus();
});

document.getElementById('carregar').addEventListener('click', () => {
  const carga = parseInt(document.getElementById('carga').value);
  meuCaminhao.carregar(carga);
  atualizarCaminhaoStatus();
});

function atualizarCaminhaoStatus() {
    document.getElementById('caminhaoStatus').textContent = `Modelo: ${meuCaminhao.modelo}, Cor: ${meuCaminhao.cor}, Ligado: ${meuCaminhao.ligado}, Velocidade: ${meuCaminhao.velocidade} km/h, Carga Atual: ${meuCaminhao.cargaAtual} kg, Capacidade Máxima: ${meuCaminhao.capacidadeCarga} kg`;
  }

