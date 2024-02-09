document.getElementById('dice').addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * 6) + 1;
    console.log(randomNum);
    if(randomNum == 1) {
        document.getElementById('img').src = 'img/inverted-dice-1.png';
        return;
    } else if(randomNum == 2) {
        document.getElementById('img').src = 'img/inverted-dice-2.png';
        return;
    } else if(randomNum == 3) {
        document.getElementById('img').src = 'img/inverted-dice-3.png';
        return;
    } else if(randomNum == 4) {
        document.getElementById('img').src = 'img/inverted-dice-4.png';
        return;
    } else if(randomNum == 5) {
        document.getElementById('img').src = 'img/inverted-dice-5.png';
        return;
    } else {
        document.getElementById('img').src = 'img/inverted-dice-6.png';
        return;
    }
 })