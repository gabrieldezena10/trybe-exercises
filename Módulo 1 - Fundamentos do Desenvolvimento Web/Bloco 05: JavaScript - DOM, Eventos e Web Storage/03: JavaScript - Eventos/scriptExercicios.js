function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  /*
  Exercício 1:
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>
*/

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

function criarCalendario(){
    let result = document.querySelector('#days');

    for (let index = 0; index <dezDaysList.length; index+=1){
        let day = dezDaysList[index];
        let dayTag = document.createElement('li');

        if(day === 24 || day ===31){
            dayTag.className = 'day holiday';
            dayTag.innerHTML = day;
            result.appendChild(dayTag);
        } else if (day ===4|| day ===11 || day ===18){
            dayTag.className = 'day friday';
            dayTag.innerHTML = day;
            result.appendChild(dayTag)
        }else if (day ===25){
            dayTag.className = 'day friday holiday';
            dayTag.innerHTML = day
            result.appendChild(dayTag);
        }else{
            dayTag.innerHTML = day;
            result.appendChild(dayTag)
        }
    }

}
criarCalendario();

/*
Exercício 2:
Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/

function createButton(Name) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonID = 'btn-holiday';
  
    newButton.innerHTML = Name;
    newButton.id = newButtonID;
    buttonContainer.appendChild(newButton);
  };
  
  createButton('Feriados');

  /*
  Exercício 3:
Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/

function destaqueFeriados(){
    let containButton = document.querySelector('#btn-holiday');
    let containFeriados = document.querySelectorAll('.holiday');
    let newColor = 'rgb(238,238,238)';
    let standardColor = 'white';

    containButton.addEventListener('click',function() {
    for (let index = 0; index<containFeriados.length; index +=1){
        if (containFeriados[index].style.backgroundColor === standardColor) {
            containFeriados[index].style.backgroundColor = newColor;
        } else {
            containFeriados[index].style.backgroundColor = standardColor;
        }
    }
})

}

destaqueFeriados();

/*
Exercício 4
Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function buttonFriday(string){
    let result4 = document.querySelector('.buttons-container')
    let fridayDay = document.createElement('button');
    let fridayTag = 'btn-friday';

    fridayDay.innerHTML = string;
    fridayDay.id = fridayTag
    result4.appendChild(fridayDay)
}
buttonFriday('Sexta-feira');

/*
Exercício 5:
Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/
function fridayClick(array){
    let buttonTag = document.querySelector('#btn-friday');
    let fridayDays = document.getElementsByClassName ('friday');
    let newText = 'Sextou Brasiiiil!!!'

    function changeText5(){
        for(let index = 0; index <fridayDays.length; index +=1){
            if (fridayDays[index].innerHTML !== newText){
                fridayDays[index].innerHTML = newText;
            } else {
                fridayDays[index].innerHTML = array[index];
            }
        }
    }
    buttonTag.addEventListener('click', changeText5);
}
let standardDays = [4, 11, 18, 25];

fridayClick(standardDays);

/*
Exercício 6:
Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
*/
function zoomIn (){
    let mouseOver = document.querySelector('#days');

    function fontSizeEnlarge(event){
        event.target.style.fontSize = '30px'
    }
    mouseOver.addEventListener('mouseover', fontSizeEnlarge)
}
function zoomOut (){
    let mouseOut = document.querySelector('#days');

    function fontSizeNormal(event){
        event.target.style.fontSize = '20px'
    }
    mouseOut.addEventListener('mouseout', fontSizeNormal)
}

zoomIn();
zoomOut();

/*
Exercício 7
Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
function addTask (string){
    let container7 = document.querySelector('.my-tasks')
    let task = document.createElement('span');

    task.innerHTML = string
    container7.appendChild(task);

}

addTask('Cozinhar');

/*
Exercício 8
Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
function colorCaption (cor){
    let container8 = document.querySelector('.my-tasks');
    let caption = document.createElement('div');
    let captionTag = 'task';

    caption.className = captionTag;
    caption.style.backgroundColor = cor;

    container8.appendChild(caption);

}
colorCaption ('pink');

/*
Exercício 9:
Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected , ela estará selecionada.
Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.
*/
function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
  
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  };
  
  setTaskClass();

  /*
  Exercício 10
Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .
function destaqueFeriados(){
    let containButton = document.querySelector('#btn-holiday');
    let containFeriados = document.querySelectorAll('.holiday');
    let newColor = 'rgb(238,238,238)';
    let standardColor = 'white';
    containButton.addEventListener('click',function() {
    for (let index = 0; index<containFeriados.length; index +=1){
        if (containFeriados[index].style.backgroundColor === standardColor) {
            containFeriados[index].style.backgroundColor = newColor;
        } else {
            containFeriados[index].style.backgroundColor = standardColor;
        }
    }
})
}
destaqueFeriados();
*/
function colorDay (){
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;

    function selectDay (event){
        let eventTargetColor = event.target.style.color;
        if (selectedTask.length >0 && eventTargetColor !== taskColor){
            let color = selectedTask[0].style.backgroundColor;
            event.target.style.color = color;
        }else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
            event.target.style.color = 'rgb(119,119,119)';
    }
}
days.addEventListener('click', selectDay);

}
colorDay();

/*
Bônus
Vamos adicionar compromissos ao seu calendário? Implemente uma função que, ao digitar um compromisso na caixa de texto "COMPROMISSOS", adiciona o item à lista "MEUS COMPROMISSOS" ao clicar no botão "ADICIONAR".
Se nenhum caractere for inserido no campo input , a função deve retornar um alert com uma mensagem de erro ao clicar em "ADICIONAR".
Ao pressionar a tecla "enter" o evento também deverá ser disparado.
*/

function addNewTask() {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
  
    addInputButton.addEventListener('click', function() {
      if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    })
  
    getInputField.addEventListener('keyup', function(event) {
      if (event.key === 'Enter' && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
  };
  
  addNewTask();