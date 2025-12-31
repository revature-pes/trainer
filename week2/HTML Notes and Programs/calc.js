var num1="", num2="", op="";
function calc(ch) {
    if(ch >= '0' && ch <= '9') {
        let textbox = document.getElementById("textbox").value;
        textbox += ch;
        document.getElementById("textbox").value = textbox;
    } else if(ch == '=') {
        num2 = document.getElementById("textbox").value;
        let expr = num1 + op + num2;
        let res = eval(expr)
        num1 = "";
        num1 = "";
        op = "";
        document.getElementById("textbox").value = res;
    }else if(ch == 'C') {
        num1 = "";
        num1 = "";
        op = "";
        document.getElementById("textbox").value = "";
    }else { // + - * / 
        num1 = document.getElementById("textbox").value;
        op = ch;
        document.getElementById("textbox").value = "";
    }
}