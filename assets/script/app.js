// woo, moneys
// by https://joemoses.co.uk, orignally used as an internal tool

let inputs = document.querySelectorAll("input");

inputs.forEach(input => {
  input.addEventListener("keyup", calcTotal);
});

function calcTotal() {
    // hide conversion 
    document.querySelector(".conversion-rack").style.visibility = "hidden";
  // find hourly rate
  if (document.getElementById("rate-value").value.length !== 0) {
    let rate = parseInt(document.getElementById("rate-value").value);

    // hours
    let hours = document.querySelectorAll(".hour");
    let totalH = 0;
    hours.forEach(hour => {
      if (hour.value !== "") {
        totalH = totalH + parseInt(hour.value);
      }
    });
    // h to £
    hToPound = rate * totalH;

    // mins
    let minutes = document.querySelectorAll(".minute");
    let totalM = 0;
    minutes.forEach(hour => {
      if (hour.value !== "") {
        totalM = totalM + parseInt(hour.value);
      }
    });
    totalM = totalM / 60;
    total = Math.round((totalM + totalH) * rate * 100) / 100;
    document.getElementById("value").innerText = total;
  }
}

// convert
document.querySelector(".convert").addEventListener("click", function(e) {
  fetch(
    "http://data.fixer.io/api/latest?access_key=d97518b378fe62256ece118fe3518109&base=&symbols=USD,AUD,CAD,PLN,GBP,MXN&format=1"
  ).then(function(response) {
    let res = response.json();
    res.then(function(e) {
      console.log(e);
      let total = parseInt(document.getElementById("value").innerText)
      document.querySelector("#usd").innerHTML = (total * e.rates.USD).toFixed(2);
      document.querySelector("#gbp").innerHTML = (total * e.rates.GBP).toFixed(2);
      document.querySelector("#aud").innerHTML = (total * e.rates.AUD).toFixed(2);
      document.querySelector(".conversion-rack").style.visibility = "visible";
    });
  });
});
