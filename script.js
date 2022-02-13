function operandCallback(e){
    const field = document.querySelector(".input.field");
    if(field.textContent != "0")field.textContent+=e.target.textContent;
    else field.textContent=e.target.textContent;
    
}



const operands = document.querySelectorAll(".button.operand");
operands.forEach(operand=>{
    operand.addEventListener("click",operandCallback)
})

