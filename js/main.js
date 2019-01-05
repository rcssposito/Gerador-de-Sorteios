            //Verify

//Impedir que o usuário solicite mais sorteios do que número
function verificar(){
  'use strict';
  var p = document.getElementById("player").value;
  var r = document.getElementById("rows").value;
  
  //converter os valores para int antes de fazer a comparação
  if (+r > +p){
    alert("O número de sorteios não pode ser maior que a quantidade de números.");
    document.getElementById('player').value = " ";
    document.getElementById('rows').value = " ";
    return false;
  }
}

            //Disable

//desabilitar as divs que receberem duplo click
'use strict';
var $box = document.querySelectorAll('.corpo');
//o uso do for each não compromete o desempenho
//a chamada só acontece pelo índice
[].forEach.call($box, function (bb){
  
  //se o usuário clicar no correspondente ao "true",
  //desativa a visualização da div
  function disable(e){
    var select = confirm("Eliminar participante?");
    if (select === true){
      e.stopPropagation();
      bb.style.display = "none";
    }
    else{
      return false;
    }}
  
  //chamada quando houver o duplo click
  bb.addEventListener('dblclick', disable);

              //Draggable//

  //criar os elementos arrastáveis

  var wrapper = document.getElementById("results"); //div results
  var active = false ;
  var currentX, currentY, initialX, initialY; //posições, antes e depois do arraste
  var xOffset = 0, yOffset = 0;

  wrapper.addEventListener("mousedown", dragStart, false);
  wrapper.addEventListener("mouseup", dragEnd, false);
  wrapper.addEventListener("mousemove", drag, false);

  //adicionar a propriedade 3d nas divs "corpo"
  //os parâmetros recebem a posição atual do elemento.
  function setTranslate(xPos, yPos, bb){
    bb.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    bb.style.transformStyle = "preserve-3d";  
  }
  
  //ao iniciar o arraste, é obtida a posição do objeto
  //a posição nos dois eixos é subtraida pelo seu offset correspondente
  function dragStart(e){
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
    
    if (e.target === bb){
      active = true;
    }
  }

  //se o arraste devolve como ativo, iniciar o repasse dos dados
  //a posição atual subtrai a posição inicial, obtendo o valor atual
  //passar como parâmetro os valores dos eixos para serem usandos no metódo translate 
  function drag(e){
    if (active){
      e.preventDefault();
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
      
      xOffset = currentX;
      yOffset = currentY;
          
      setTranslate(currentX, currentY, bb);
    }
  }

  //ao finalizar o evento do mouse repassar os valores dos eixos,
  //gravar como iniciais as posiçoes tidas como atuais na função drag
  function dragEnd(e){
    initialX = currentX;
    initialY = currentY;
    active = false;
  }

});