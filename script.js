const convertBtn = document.getElementById("convert-btn");
const input = document.getElementById("number");
const output = document.getElementById("output");

const clearOutput = () =>{
    output.innerText = ""
}

const convertToRoman = (num) => {
    const ref = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    const result = [];
    ref.forEach(function (arr){
        while(num >=arr[1]) {
            result.push(arr[0]);
            num -= arr[1];
        }
    });
    return result.join('');
}

convertBtn.addEventListener("click", (e)=>{
    const int = parseInt(input.value);
    if(!int){
        output.innerText = "Please enter a valid number";
    }else if(int < 0){
        output.innerText = "Please enter a number greater than or equal to 1"
    }else if(int > 3999){
        output.innerText = "Please enter a number less than or equal to 3999"
    }else{
        clearOutput();
        output.innerText = convertToRoman(int);
    }
})