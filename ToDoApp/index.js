var c = document.getElementById("list");
var container = document.getElementById("container");
var button = document.getElementById("add");
button.addEventListener('click', function () {
    var paragraph = document.createElement('p');
    paragraph.textContent = c.value;
    container.appendChild(paragraph);
});
