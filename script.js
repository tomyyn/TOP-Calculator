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



const operands = document.querySelectorAll(".button.operand");
operands.forEach(operand=>{
    operand.addEventListener("click",operandCallback);
})

const decimal = document.querySelector(".button.decimal");;
decimal.addEventListener("click",decimalCallBack);

const backSpace = document.querySelector("#backSpace");
backSpace.addEventListener("click",backSpaceCallBack);



