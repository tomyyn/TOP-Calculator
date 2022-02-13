let ans = '';
let currOp ='';

function operandCallback(e){
    const field = document.querySelector(".input.field");
    if(field.textContent != "0")field.textContent+=e.target.textContent;
    else field.textContent=e.target.textContent;
}

function decimalCallBack(e){
    const field = document.querySelector(".input.field");
    if(field.textContent.indexOf('.') == -1) field.textContent+="."
}

function backSpaceCallBack(e){
    const field = document.querySelector(".input.field");
    if(field.textContent) field.textContent=field.textContent.slice(0,field.textContent.length-1)
}

function calculate(a,b,op){
    switch(op){
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "+":
            return a*b;
        case "/":
            if(b!=0) return a/b;
            else {
                alert("Hold on buckaroo, you can't divide by 0")
                return NaN;
            }
    }

}

function truncate(n){
    return (Math.floor(n*10000)/10000)
}

function operationCallBack(e){
    const ifield = document.querySelector(".input.field");
    const ofield = document.querySelector(".output.field");
    const butOp = e.target.textContent;
    console.log(ifield.textContent)
    if((!ifield.textContent)||(ifield.textContent==".")){
        if(!ans) ans=0;
        currOp=butOp;
    }
    else if(!ofield.textContent){
        ans = +ifield.textContent;
        ifield.textContent="";
        currOp=butOp;
    }
    else{
        let aux = truncate(calculate(+ans,+ifield.textContent,currOp))
        if(!isNaN(aux)){
            ans=aux;
            currOp=butOp;
            ifield.textContent="";
        }
        
    }

    
    ofield.textContent=ans+currOp;
}

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