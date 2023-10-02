const btnRed = document.getElementById('btn-red');
const btnGreen = document.getElementById('btn-green');
const btnBlue = document.getElementById('btn-blue');

btnRed.addEventListener('click', () => {
    document.body.style.backgroundColor = 'red';
});

btnGreen.addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
});

btnBlue.addEventListener('click', () => {
    document.body.style.backgroundColor = 'blue';
});