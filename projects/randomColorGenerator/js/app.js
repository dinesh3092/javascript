const getColor = () =>{

    const randomNumber = Math.floor(Math.random() * 16777216);
    const randomCode = "#" + randomNumber.toString(16); // 16 for hex code converter
    
    
    document.body.style.backgroundColor = randomCode;
    
    document.getElementById('color-code').innerText = randomCode;
}

// event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
);
 

//init call
getColor();

// setInterval(() =>{
//     getColor()   
// }, 5000
// );
// Random Number
// Hex Code 