gameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

let firstPlayer = true;

let intervalId;

function RenderBoard(){
  html = '';
    html += `
    <div class="row1">
      <div class="js-top-left top-left" onclick="PlayMove('js-top-left');">
      ${gameBoard[0][0]}
      </div>
      <div class="js-top-middle top-middle" onclick="PlayMove('js-top-middle');">
      ${gameBoard[0][1]}
      </div>
      <div class="js-top-right top-right" onclick="PlayMove('js-top-right');">
      ${gameBoard[0][2]}
      </div>
    </div>
    <div class="row2">
      <div class="js-middle-left middle-left" onclick="PlayMove('js-middle-left');">
      ${gameBoard[1][0]}
      </div>
      <div class="js-middle-middle middle-middle" onclick="PlayMove('js-middle-middle');">
      ${gameBoard[1][1]}
      </div>
      <div class="js-middle-right middle-right" onclick="PlayMove('js-middle-right');">
      ${gameBoard[1][2]}
      </div>
    </div>
    <div class="row3">
      <div class="js-bottom-left bottom-left" onclick="PlayMove('js-bottom-left');">
      ${gameBoard[2][0]}
      </div>
      <div class="js-bottom-middle bottom-middle" onclick="PlayMove('js-bottom-middle');">
      ${gameBoard[2][1]}
      </div>
      <div class="js-bottom-right bottom-right" onclick="PlayMove('js-bottom-right');">
      ${gameBoard[2][2]}
      </div>
    </div>
  `;
  document.querySelector('.js-box')
    .innerHTML = html;
}


function PlayMove(className) {
  clearInterval(intervalId);
  if (className === 'js-top-left'){
    if (gameBoard[0][0] !== ''){
      document.querySelector('.js-error-text').innerHTML = 'box is already taken';
    }
    else{
      gameBoard[0][0] = PlayerMove();
      RenderBoard();
      document.querySelector('.js-error-text').innerHTML = '';
    }
  }
  else if(className === 'js-top-middle') {
    if (gameBoard[0][1] !== ''){
      document.querySelector('.js-error-text').innerHTML = 'box is already taken';
    }
    else{
      gameBoard[0][1] = PlayerMove();
      RenderBoard();
      document.querySelector('.js-error-text').innerHTML = '';
    }
  }
  else if(className === 'js-top-right') {
    if (gameBoard[0][2] !== ''){
      document.querySelector('.js-error-text').innerHTML = 'box is already taken';
    }
    else{
      gameBoard[0][2] = PlayerMove();
      RenderBoard();
      document.querySelector('.js-error-text').innerHTML = '';
    }
  }
  else if(className === 'js-middle-left') {
    if (gameBoard[1][0] !== ''){
      document.querySelector('.js-error-text').innerHTML = 'box is already taken';
    }
    else{
      gameBoard[1][0] = PlayerMove();
      RenderBoard();
      document.querySelector('.js-error-text').innerHTML = '';
    }
  }
  else if(className === 'js-middle-middle') {
    if (gameBoard[1][1] !== ''){
      document.querySelector('.js-error-text').innerHTML = 'box is already taken';
    }
    else{
      gameBoard[1][1] = PlayerMove();
      RenderBoard();
      document.querySelector('.js-error-text').innerHTML = '';
    }
  }
  else if(className === 'js-middle-right') {
    if (gameBoard[1][2] !== ''){
      document.querySelector('.js-error-text').innerHTML = 'box is already taken';
    }
    else{
      gameBoard[1][2] = PlayerMove();
      RenderBoard();
      document.querySelector('.js-error-text').innerHTML = '';
    }
  }
  else if(className === 'js-bottom-left') {
    if (gameBoard[2][0] !== ''){
      document.querySelector('.js-error-text').innerHTML = 'box is already taken';
    }
    else{
      gameBoard[2][0] = PlayerMove();
      RenderBoard();
      document.querySelector('.js-error-text').innerHTML = '';
    }
  }
  else if(className === 'js-bottom-middle') {
    if (gameBoard[2][1] !== ''){
      document.querySelector('.js-error-text').innerHTML = 'box is already taken';
    }
    else{
      gameBoard[2][1] = PlayerMove();
      RenderBoard();
      document.querySelector('.js-error-text').innerHTML = '';
    }
  }
  else if(className === 'js-bottom-right') {
    if (gameBoard[2][2] !== ''){
      document.querySelector('.js-error-text').innerHTML = 'box is already taken';
    }
    else{
      gameBoard[2][2] = PlayerMove();
      RenderBoard();
      document.querySelector('.js-error-text').innerHTML = '';
    }
  }
}

function PlayerMove(){
  if (firstPlayer === true){
    firstPlayer = false;
    document.querySelector('.js-player-move').innerHTML = "It is O's move";
    return 'X';
  }
  else if (firstPlayer === false){
    firstPlayer = true;
    document.querySelector('.js-player-move').innerHTML = "It is X's move";
    return'O';
  }
}