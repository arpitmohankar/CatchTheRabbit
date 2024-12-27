let score = 0;
const arpit = document.getElementById('arpit');
const scoreDisplay = document.getElementById('score');
const holes = document.querySelectorAll('.hole');

function getRandomHole(){
    const randomIndex = Math.floor(Math.random()*holes.length);
    return holes[randomIndex];
}
function showarpit() {
    const hole = getRandomHole();
    arpit.style.left = (hole.offsetLeft + 18) + 'px';
    arpit.style.bottom = (hole.offsetTop - 200) + 'px';
    arpit.style.display = 'block' ;
}

arpit.addEventListener('click' , () =>{
    score++;
    scoreDisplay.textContent = 'Score: ' + score ;
    arpit.style.display = 'none' ;
    setTimeout(showarpit,500);
})

setInterval(showarpit, 1000);
