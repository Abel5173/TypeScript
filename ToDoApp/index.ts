let c = document.getElementById("list") as HTMLInputElement;
let container = document.getElementById("container") as HTMLDivElement;
let button = document.getElementById("add") as HTMLButtonElement;

button.addEventListener('click', function(){
let paragraph = document.createElement('p');
paragraph.textContent = c.value;
container.appendChild(paragraph);
});