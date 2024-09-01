const questions = [
    {
        'que' : 'Which of the following is a Markup Language ?',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'Javascript',
        'd' : 'PHP',
        'correct' : 'a'
    },

    {
        'que' : 'Which year Javascript was launched ?',
        'a' : '1996',
        'b' : '1995',
        'c' : '1994',
        'd' : 'None of the above',
        'correct' : 'b'
    },

    {
        'que' : 'What does CSS stands for ?',
        'a' : 'Hypertext Markup Language',
        'b' : 'Cascading Style Sheet',
        'c' : 'Javascript Object Notation',
        'd' : 'None of the above',
        'correct' : 'b'
    }

]



let index =  0;
let total = questions.length;
let right = 0;
let wrong = 0;
const queBox = document.getElementById("queBox");
const optionInput = document.querySelectorAll(".options");

const loadQuestion = () =>{
    if(index === total){
        return endQuiz();
    }

    reset(); 
    const data = questions[index]
    queBox.innerText = `${index+1}. ${data.que}`;
    optionInput[0].nextElementSibling.innerText = data.a;
    optionInput[1].nextElementSibling.innerText = data.b;
    optionInput[2].nextElementSibling.innerText = data.c;
    optionInput[3].nextElementSibling.innerText = data.d;
    // console.log(data)
}


const submitQuiz = () => {
    const data = questions[index]
    const answer = getAnswer();
    if (answer === data.correct){
        right++;
    }
    else{
        wrong++;
    }

    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
        if(input.checked){
            // console.log(input.value)
            answer =  input.value;
        }
        
    }) 
    return answer;
}

const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    const newBox = `
    <div class="finalReport">
        <h5>Thank you for playing the Quiz<h5>
        <h4> Total Questions =  ${total}<h4>
        <h4> Correct Answer  =  ${right}<h4>
        <h4> Wrong Answer    =  ${wrong}<h4>
    <div>
    `;
    document.getElementById("box").innerHTML = newBox;
}


loadQuestion();