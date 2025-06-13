import assembly from './assets/img/assembly.png';
import "./App.css";

function App() {
  return (
    <>
      <header>
        <nav>
          <div>
            <img src={assembly} alt="logo do seu trabalho" className='assembly' />
          </div>
          <div>
            <h1>Assembly</h1>
          </div>
          <div></div>
        </nav>
      </header>
      <main>
        <div className="historia">
          <h2>Historia</h2>
          <ul>
            <li>Assembly surgiu nos anos 1940 como uma forma de facilitar a programação, que até então era feita diretamente em código de máquina (só 0s e 1s). Usando comandos simples como MOV e ADD, Assembly permitia que humanos escrevessem instruções mais legíveis, que depois eram traduzidas por um assembler para o formato que o processador entende. Foi muito usado entre os anos 50 e 80 em sistemas operacionais, jogos e softwares embarcados. Hoje, apesar de menos comum, ainda é essencial em áreas que exigem controle direto do hardware, como drivers, sistemas embarcados e engenharia reversa.</li>
          </ul>
        </div>
        <div className='comofuncionadiv'>
          <h2 className='comoFunciona'>Como funciona</h2>
          <ul>
            <li>A linguagem Assembly funciona como uma tradução direta entre o ser humano e o processador. Cada comando em Assembly representa uma instrução simples que o processador executa, como mover dados, fazer cálculos ou pular para outra parte do código. Por exemplo, MOV AX, 1 coloca o valor 1 no registrador AX (um tipo de “caixinha” dentro da CPU). O código é escrito usando esses comandos legíveis, e depois um programa chamado assembler converte tudo isso para código de máquina — a linguagem binária que o processador realmente entende. É uma linguagem de baixo nível, ou seja, fica bem próxima do funcionamento interno do hardware, permitindo controle total sobre cada operação da CPU.</li>
          </ul>
        </div>
      </main>
      <footer>
        <h3>Desenvolvido por: Frabricio / 2°C TEC</h3>
      </footer>
    </>
  );
}

export default App;
