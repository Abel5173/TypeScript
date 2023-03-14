var c = document.getElementById("list") as HTMLInputElement;
var container = document.getElementById("container") as HTMLDivElement;
var button = document.getElementById("add") as HTMLButtonElement;

button.addEventListener('click', function(){
let paragraph = document.createElement('p');
paragraph.textContent = c.value;
container.appendChild(paragraph);
});