//State for the answer and current operation
let ans = '';
let currOp ='';

//Callbacks
function operandCallback(e){
    const field = document.querySelector(".input.field");
    if(field.textContent != "0")field.textContent+=e.target.textContent;
    else field.textContent=e.target.textContent;
}

function decimalCallBack(){
    const field = document.querySelector(".input.field");
    if(field.textContent.indexOf('.') == -1) field.textContent+="."
}

function backSpaceCallBack(){
    const field = document.querySelector(".input.field");
    if(field.textContent) field.textContent=field.textContent.slice(0,field.textContent.length-1)
}

//Helper function for calculating
function calculate(a,b,op){
    switch(op){
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            if(b!=0) return a/b;
            else {
                alert("Hold on buckaroo, you can't divide by 0")
                return NaN;
            }
    }

}

//Truncates numers to six decimals
function truncate(n){
    return (Math.floor(n*1000000)/1000000)
}

function operationCallBack(e){
    const ifield = document.querySelector(".input.field");
    const ofield = document.querySelector(".output.field");
    const butOp = e.target.textContent;
    //If the input is empty or just a dot
    if((!ifield.textContent)||(ifield.textContent==".")){
        if(!ans) ans=0;
        currOp=butOp;
    }
    //If output is empty or there isn't a current operation
    else if((!ofield.textContent)||(!currOp)){
        ans = +ifield.textContent;
        ifield.textContent="";
        currOp=butOp;
    }
    else{
        let aux = truncate(calculate(+ans,+ifield.textContent,currOp))
        if((!isNaN(aux))){ //If the operation wasn't a division by 0
            ans=aux;
            currOp=butOp;
            ifield.textContent="";
        }
        
    }

    
    ofield.textContent=ans+currOp;
}

function equalCallBack(){
    const ifield = document.querySelector(".input.field");
    const ofield = document.querySelector(".output.field");
    if((ifield.textContent)&&(ofield.textContent)&&(currOp)){
        let aux = truncate(calculate(+ans,+ifield.textContent,currOp))
        if((!isNaN(aux))){
            ans=aux;
            currOp="";
            ifield.textContent="";
            ofield.textContent=ans;
        }
    }
}

function ACCallBack(){
    ans="";
    currOp="";
    const ifield = document.querySelector(".input.field");
    const ofield = document.querySelector(".output.field");
    ifield.textContent="";
    ofield.textContent="";
}

function keyboardCallBack(e){
    if((e.key >= "0") && (e.key <="9")) operandCallback({target:{textContent:`${e.key}`}})
    else if(e.key=="Enter") equalCallBack();
    else if(e.key=="Escape") ACCallBack();
    else if(e.key==".") decimalCallBack();
    else if(e.key=="Backspace") backSpaceCallBack();
    else if((e.key=="+")||(e.key=="-")||(e.key=="*")||(e.key=="/")) operationCallBack({target:{textContent:`${e.key}`}})

}

//Asing callbacks to element's events
const operands = document.querySelectorAll(".button.operand");
operands.forEach(operand=>{
    operand.addEventListener("click",operandCallback);
})

const operations = document.querySelectorAll(".button.operation");
operations.forEach(operation=>{
    operation.addEventListener("click", operationCallBack);
})

const decimal = document.querySelector(".button.decimal");;
decimal.addEventListener("click",decimalCallBack);

const backSpace = document.querySelector("#backSpace");
backSpace.addEventListener("click",backSpaceCallBack);

const equal = document.querySelector(".button.equal");
equal.addEventListener("click",equalCallBack);

const AC = document.querySelector("#AC");
AC.addEventListener("click",ACCallBack);

document.addEventListener("keydown",keyboardCallBack);