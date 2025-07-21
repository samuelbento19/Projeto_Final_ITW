let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

const buttonRockElement = document.querySelector('.js-rock-button');
buttonRockElement.addEventListener('click', () => playGame('pedra'));


const buttonPaperElement = document.querySelector('.js-paper-button');
buttonPaperElement.addEventListener('click', () => playGame('papel'));


const buttonScissorsElement = document.querySelector('.js-scissors-button');
buttonScissorsElement.addEventListener('click', () => playGame('tesoura'));



function pickComputerMove(){
  let randomNumber = Math.random();
  let computerMove = '';

  if(randomNumber > 0 && randomNumber <= 1/3){
    computerMove = 'pedra';
  }else if(randomNumber > 1/3 && randomNumber <= 2/3){
    computerMove = 'papel';
  }else if(randomNumber > 2/3 && randomNumber <= 1){
    computerMove = 'tesoura';
  }

  return computerMove;
}

function playGame(playerMove){
  const computerMove = pickComputerMove();
  let result = '';

  if(playerMove === 'pedra'){
    if(computerMove === 'pedra'){
      result = 'Empate!'
    }else if(computerMove === 'papel'){
      result = 'Perdeste!'
    }else if(computerMove === 'tesoura'){
      result = 'Ganhaste!'
    } 
  }

  if(playerMove === 'papel'){
    if(computerMove === 'papel'){
      result = 'Empate!'
    }else if(computerMove === 'tesoura'){
      result = 'Perdeste!'
    }else if(computerMove === 'pedra'){
      result = 'Ganhaste!'
    } 
  }

  if(playerMove === 'tesoura'){
    if(computerMove === 'tesoura'){
      result = 'Empate!'
    }else if(computerMove === 'pedra'){
      result = 'Perdeste!'
    }else if(computerMove === 'papel'){
      result = 'Ganhaste!'
    } 
  }

  if(result === 'Ganhaste!'){
    score.wins++;
  }else if(result === 'Perdeste!'){
    score.losses++;
  }else if(result === 'Empate!'){
    score.ties++;
  }


  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `Tu escolheste ${playerMove} e o computador escolheu ${computerMove}!`;
  
  updateScoreElement();

  localStorage.setItem('score', JSON.stringify(score));
}

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = 'Vitórias: '+score.wins+"\n Derrotas: "+score.losses+"\n Empates: "+score.ties;
}

function resetScore() {
  const shouldReset = confirm('Tem a certeza que quer apagar o score?');

  if (shouldReset) {
    score = {
      wins: 0,
      losses: 0,
      ties: 0
    };
    localStorage.removeItem('score'); // também limpa do armazenamento
    updateScoreElement();
  }
}

document.querySelector('.reset-score-button').addEventListener('click', () => resetScore());