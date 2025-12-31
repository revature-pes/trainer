function doSquare() {
    if(document.getElementById("number").value.length == 0)
        alert("Enter the input number")
    else if(document.getElementById("number").value)
        ;
    let num = parseFloat(document.getElementById("number").value);
    let square = num * num;
    document.getElementById("output").value = square;
    document.getElementById("output_caption").innerHTML = "square";
}
function doCube() {
    let num = parseInt(document.getElementById("number").value);
    let cube = num * num * num;
    document.getElementById("output").value = cube;
    document.getElementById("output_caption").innerHTML = "cube";
}