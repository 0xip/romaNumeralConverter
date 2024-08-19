const convertBtn = document.getElementById("convert-btn");
const input = document.getElementById("number")
const output = document.getElementById("output");

const clearOutput = () =>{
    output.innerText = ""
}

convertBtn.addEventListener("click", (convertBtn)=>{
    if(!input.value){
        output.innerText = "Please enter a valid number";
    }else if(input.value < 0){
        output.innerText = "Please enter a number greater than or equal to 1"
    }else if(input.value > 3999){
        output.innerText = "Please enter a number less than or equal to 3999"
    }else{
        return true
    }
})

const convertToRoman = (num) => {
    const ref = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    const result = [];
    ref.foreach(function (arr){
        while(num >=arr[1]) {
            result.push(arr[0]);
            num -= arr[1];
        }
    });
    return result.join('');
}