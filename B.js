let colors = ["red", "orange", "yellow"];

let button = document.getElementById('btn');

button.addEventListener('click', function(){
    
    let body= parseInt((colors.length)+1);
    
    let background = document.getElementById('BJOC');

    BJOC.style.background = `${colors[body]}`
}) 