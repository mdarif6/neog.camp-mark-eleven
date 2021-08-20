let dob = document.querySelector(".date");
let number = document.querySelector(".number");
let checkButton = document.querySelector(".button");
let display = document.querySelector(".output");

// function luckyDate(date, number) {
//   let year = date.getFullYear();
//   let month = date.getMonth();
//   let dayDate = date.getDate();

//   let dateSum = year + month + dayDate;
//   if (dateSum % inputNumber !== 0) {
//     display.textContent = "You are lucky";
//   } else {
//     display.textContent = "oops";
//   }
// }

// function clickHandler() {
//   let inputNumber = number.value;
//   let inputDate = dob.value;
//   let date = new Date(inputDate);

//   let finalDisplay = luckyDate(date, inputNumber);
//   console.log(finalDisplay);
// }

checkButton.addEventListener("click", () => {
  let inputNumber = number.value;
  let inputDate = dob.value;
  let date = new Date(inputDate);
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let dayDate = date.getDate();
  let dateSum = year + month + dayDate;

  console.log(year, month, dayDate, dateSum);

  // let finalNumber = dateSum % inputNumber;

  console.log(dateSum);
  // console.log(finalNumber);
  if (inputNumber === "" || inputDate === "") {
    display.textContent = `Can not Empty`;
    return;
  }
  if (dateSum < inputNumber) {
    display.textContent = "You Number Exceding your DOB";
  } else if (dateSum % inputNumber === 0) {
    display.textContent = " Your Date Of Birth is Lucky";
  } else {
    display.textContent = "Oops! Your Date Of Birth is not  Lucky";
  }
});

//   } else if (dateSum < finalNumber) {
//     display.textContent = "you are entering wrong birthdate"}
//     // } else if (finalNumber !== 0) {
//     //   console.log();
//     //   display.textContent = "You are lucky";
//   // } else {
//   //   display.textContent = "oops";
//   // }
// // });
