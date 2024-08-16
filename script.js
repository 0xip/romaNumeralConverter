const convertBtn = document.getElementById("convert-btn");
const input = document.getElementById("number")
const output = document.getElementById("output");

convertBtn.addEventListener("click", (convertBtn)=>{
    if(!input.value){
        output.innerText = "Please enter a valid number";
    }else if(input.value < 0){
        output.innerText = "Please enter a number greater than or equal to 1"
    }else if(input.value > 3999){
        output.innerText = "Please enter a number less than or equal to 3999"
    }
})