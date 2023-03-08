// const inputEle = document.getElementById("inp")
// const submitbtn = document.getElementById("submit")
// const para = document.getElementById("para")
// const answerPara = document.getElementById("answer-para")
// const buttons = document.querySelectorAll('.calculator-button');
// console.log(buttons)
// let answer = '';

// console.log(inputEle)
// let inputText

// inputEle.addEventListener("input", (e)=>{
//      inputText = e.target.value
//     // inputText =   inputText.slice(0, 3)
//     inputEle.value = inputText
//     if(inputText.lenth > 5){
//         alert("Characters exceeded")
//     }
//     console.log(inputText)
// })

// // submitbtn.addEventListener("click", function() {
// //     // Move the submitbtn to the right by 3 pixels
// //     // submitbtn.classList.add("animate");
// //     if(inputText){
// //         para.innerHTML = inputText
// //     }
// //   })

// //   function addseven  (e) {
// //     var buttonValue = document.getElementById("myButton").value;
// //   console.log("Button value is: " + buttonValue);
// //   answerPara.innerHTML = buttonValue
// //   } 

//   buttons.forEach(button => {
//     button.addEventListener('click', event => {
//       // Get value of button clicked
//       const value = event.target.value;
//       console.log(button)
//       if(value === "+" || value === "-" || value === "*" || value === "/" )
  
//       // Concatenate value to current answer
//       answer += value;
//       console.log(answer)
  
//       // Update answer paragraph
//       document.getElementById('answer-para').textContent = answer;
//     });
//   });


  let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    try {
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
          }
          else if(e.target.innerHTML == 'C'){
            string = ""
            document.querySelector('input').value = string;
          }
          else{ 
          console.log(e.target)
          string = string + e.target.innerHTML;
          document.querySelector('input').value = string;
            }
    } catch (error) {
        alert("Please enter the correct input", error)
    }
   
  })
})


// var tweet = prompt("Compose your tweet")
// var tweetUnder140 = tweet.slice(0, 140)
// alert(tweetUnder140)