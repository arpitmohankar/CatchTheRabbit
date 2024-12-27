let score = 0;
const rabbit = document.getElementById('rabbit');
const scoreDisplay = document.getElementById('score');
const holes = document.querySelectorAll('.hole');

function getRandomHole(){
    const randomIndex = Math.floor(Math.random()*holes.length);
    return holes[randomIndex];
}
function showRabbit() {
    const hole = getRandomHole();
    rabbit.style.left = (hole.offsetLeft + 18) + 'px';
    rabbit.style.bottom = (hole.offsetTop - 200) + 'px';
    rabbit.style.display = 'block' ;
}

rabbit.addEventListener('click' , () =>{
    score++;
    scoreDisplay.textContent = 'Score: ' + score ;
    rabbit.style.display = 'none' ;
    setTimeout(showRabbit,1000);
})

setInterval(showRabbit, 2000);
