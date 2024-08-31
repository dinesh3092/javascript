const endDate = "02 September 2024 12:00 AM"
//const endDate = "31 August 2024 02:46 PM"

// date show dynamically on page
document.getElementById('end-Date').innerText = endDate;
const inputs = document.querySelectorAll("input");
// console.log(inputs);


// Arrow Function
const clock = () => {
    const end = new Date(endDate);
    const now = new Date();

    // console.log(`End Date is ${end}`);
    // console.log(`Current Date is ${now}`); 

    //convert milliseconds into seconds   
    const difference = (end - now)/1000;

    //console.log(`Difference between Dates is ${difference}`);




    // convert difference into days
    const days = Math.floor(((difference/3600))/24)
    inputs[0].value = days;
    //console.log(days)
    // console.log(difference/3600/24)




    // convert difference into hours
    const hours = Math.floor(((difference/3600)%24));
    // console.log(((difference/3600)%24))
    // console.log(hours);
    inputs[1].value = hours;



    // convert difference into minutes
    const min = Math.floor((difference/60)%60)
    //console.log(min)
    inputs[2].value = min;

    //convert difference into minutes
    const sec = Math.floor(difference) % 60;
    inputs[3].value = sec;

    if(days == 0 && hours == 0 && min == 0 && sec == 0)
    {
        stopFunction();
    }
}

clock();

// Calculation
/**
 *  1 day = 24 hrs
 *  1 hr = 60 min
 *  1 hr = 60min * 60seconds = 3600 seconds
 * 
 */


const timeInterval = setInterval(() => {
    clock()
}, 1000
);

const stopFunction = () =>{
    clearInterval(timeInterval);
}




/*
  ++++++  SUMMARY    ++++++
1. const
2. document.getElementById('end-Date').innerText = endDate;
3. document.querySelectorAll("input");
4. console.log(inputs);
5. Arrow Function    const clock = () => {}
6. const end = new Date(endDate);
7. const now = new Date();
8. const days = Math.floor(((difference/3600))/24)
9. const timeInterval = setInterval(() => {
            clock()
        }, 1000
    );
10. const stopFunction = () =>{
        clearInterval(timeInterval);
    }


*/