const upperSet =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "~!@#$%^&*()_+/"



// selectors
const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}

// generate random data
const generatePassword = (password = "") => {
    if(upperInput.checked){
        password += getRandomData(upperSet);
    }

    if(lowerInput.checked){
        password += getRandomData(lowerSet);
    }

    if(numberInput.checked){
        password += getRandomData(numberSet);
    }

    if(symbolInput.checked){
        password += getRandomData(symbolSet);
    }

    if(password.length < totalChar.value){
        // recursion function
        return generatePassword(password);
    }

    passBox.innerText = truncateString(password, totalChar.value);
    // console.log(truncateString(password, totalChar.value));
}

generatePassword();

document.getElementById("btn").addEventListener("click", 
    function(){
        generatePassword();
    }
)

function truncateString(str, num){
    if(str.length > num){
        let subStr = str.substring(0, num);
        return subStr;
    }
    else{
        return str;
    }
}
