const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';


const urgent = document.getElementsByClassName('emergency-tasks')[0];
urgent.style.backgroundColor = 'rgb(150,0,0)'


const urgentTasks = document.querySelectorAll('.emergency-tasks h3');
for(let i = 0; i < urgentTasks.length; i +=1){
    urgentTasks[i].style.backgroundColor= 'rgb(56,79,168)';
}

const nonUrgert = document.getElementsByClassName('no-emergency-tasks')[0];
nonUrgert.style.backgroundColor = 'rgb(222,0,52)'

const nonUrgertTasks = document.querySelectorAll('.no-emergency-tasks h3');

for (let i = 0; i <nonUrgertTasks.length; i +=1){
    nonUrgertTasks[i].style.backgroundColor = 'rgb(0,0,0)';
}

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(200,200,50)'