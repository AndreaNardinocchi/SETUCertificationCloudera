// function compute() {
//   const principal = document.getElementById("principal").value;
//   const rate = document.getElementById("rate").value;
//   const years = document.getElementById("years").value;
//   const interest = (principal * years * rate) / 100;
//   const amount = parseInt(principal) + parseFloat(interest);
//   const result = document.getElementById("result");
//   const year = new Date().getFullYear() + parseInt(years);

//   if (principal <= 0) {
//     alert("Enter a positive number!");
//     /*
//     Once the user clicks on the alert “OK” button, take the user
//     back to the “Principal” input box, by setting the focus on this
//     box using the focus method in the code for principal input validation
//     */
//     document.getElementById("principal").focus();
//   } else {
//     result.innerHTML =
//       "If you deposit $<mark>" +
//       principal +
//       "</mark>,<br> at an interest rate of " +
//       rate +
//       "%.<br>You will receive an amount of $<mark>" +
//       interest +
//       "</mark>,<br>in the year " +
//       year +
//       "<br></br>";
//   }
// }

function compute() {
  const principal = parseFloat(document.getElementById("principal").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const years = parseInt(document.getElementById("years").value);
  const result = document.getElementById("result");

  if (principal <= 0 || isNaN(principal)) {
    alert("Enter a positive number!");
    document.getElementById("principal").focus();
    return;
  }

  const interest = (principal * years * rate) / 100;
  const year = new Date().getFullYear() + years;

  result.innerHTML =
    "If you deposit <mark>$" +
    principal.toFixed(2) +
    "</mark>,<br> at an interest rate of <mark>" +
    rate +
    "%</mark>.<br>You will receive an amount of <mark>$" +
    interest.toFixed(2) +
    "</mark>,<br>in the year <mark>" +
    year +
    "</mark>.";
}

function updateRate() {
  const rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = rateval;
}
