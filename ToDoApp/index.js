let checkbox = document.querySelectorAll('input[type="checkbox"]');
var x = 1;
checkbox.forEach(element => {
    let t = element.textContent;
    console.log(x+ " " +t+"next");
    x++;    
});