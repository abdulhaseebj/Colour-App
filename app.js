const div = document.querySelector('div');
const body = document.querySelector('body')
const colorArray = ['red', 'green', 'blue', 'brown', 'yellow'];

for (let i = 0; i < colorArray.length; i++) {
    // console.log(colorArray[i]);
    div.innerHTML += `<button onclick="colorChange(${i})">${colorArray[i]}</button>`

}

function colorChange(i) {
    // console.log(colorArray[i]);
    body.style.background = (colorArray[i])

}