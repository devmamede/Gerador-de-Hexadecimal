let colorInput = document.getElementById('color')
let hexadecimalInput = document.querySelector('#hexadecimal')
colorInput.addEventListener('input', () =>{
    let color = colorInput.value;
    hexadecimalInput.value = color;
    document.querySelector('h1').style.color = color;
})