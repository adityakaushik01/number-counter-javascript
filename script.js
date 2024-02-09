const counter = document.getElementById('counter');
const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');

let value = counter.innerHTML;

increase.addEventListener('click', () => {
    value++;
    document.getElementById('counter').innerHTML = value;
});

decrease.addEventListener('click', () => {
    value--;
    document.getElementById('counter').innerHTML = value;
});