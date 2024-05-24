gameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

firstPlayer = true;


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
  if (className === 'js-top-left'){
    gameBoard[0][0] = PlayerMove();
    RenderBoard();
  }
  else if(className === 'js-top-middle') {
    gameBoard[0][1] = PlayerMove();
    RenderBoard();
  }
  else if(className === 'js-top-right') {
    gameBoard[0][2] = PlayerMove();
    RenderBoard();
  }
  else if(className === 'js-middle-left') {
    gameBoard[1][0] = PlayerMove();
    RenderBoard();
  }
  else if(className === 'js-middle-middle') {
    gameBoard[1][1] = PlayerMove();
    RenderBoard();
  }
  else if(className === 'js-middle-right') {
    gameBoard[1][2] = PlayerMove();
    RenderBoard();
  }
  else if(className === 'js-bottom-left') {
    gameBoard[2][0] = PlayerMove();
    RenderBoard();
  }
  else if(className === 'js-bottom-middle') {
    gameBoard[2][1] = PlayerMove();
    RenderBoard();
  }
  else if(className === 'js-bottom-right') {
    gameBoard[2][2] = PlayerMove();
    RenderBoard();
  }
  console.log(gameBoard);
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